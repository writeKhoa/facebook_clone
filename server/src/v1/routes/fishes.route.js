const mongoose = require("mongoose");
const { Schema } = mongoose;
const express = require("express");
const route = express.Router();
const { connectMongodb } = require("../helpers");

const fishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  bodyColor: {
    type: String,
    required: function () {
      return !this.tailColor;
    },
  },
  tailColor: {
    type: String,
    required: function () {
      return !this.bodyColor;
    },
  },
  oarColor: {
    type: String,
  },
  headColor: {
    type: String,
  },
});

const fishes = mongoose.model("fishes", fishSchema);
const fishListSchema = new Schema(
  {
    fishId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "fishes",
      index: true,
    },

    fishList: [
      {
        fishId: {
          type: Schema.Types.ObjectId,
          ref: "fishes",
        },
      },
    ],

    count: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

fishListSchema.pre("save", function (next) {
  if (this.fishList.length > 10) {
    this.fishList.shift();
  }
  next();
});

const fishList = mongoose.model("fishList", fishListSchema);

route.post("/", async function (req, res) {
  try {
    const { name } = req.body;
    const newDoc = fishes({ name });
    await newDoc.save();

    return res.status(200).json({
      data: {
        __fish: newDoc,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

route.post("/list", async (req, res) => {
  try {
    const { id, fishId } = req.body;

    const data = await fishList.findOneAndUpdate(
      { fishId: id },
      {
        $push: {
          fishList: { fishId },
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    return res.status(200).json({
      data: {
        __updated: data,
      },
    });

    // const session = await mongoose.startSession();

    // await session.withTransaction(async () => {
    //   const findDoc = await fishList.findOne({ fishId: id });

    //   if (!findDoc) {
    //     const newDoc = fishList({
    //       fishId: id,
    //       fishList: {
    //         fishId,
    //       },
    //     });
    //     await newDoc.save();
    //     return res.status(200).json({
    //       data: {
    //         __list: newDoc,
    //       },
    //     });
    //   }

    //   console.log(findDoc);
    //   const isExisted = findDoc.fishList.some((fish) => {
    //     // console.log(fish);
    //     return fish.fishId.toString() === fishId;
    //   });

    //   if (isExisted) {
    //     return res.status(400).json({ error: "cmm" });
    //   }

    //   const updateDoc = await fishList.findOneAndUpdate(
    //     {
    //       fishId: id,
    //     },
    //     {
    //       $push: {
    //         fishList: { fishId },
    //       },
    //       $inc: {
    //         count: 1,
    //       },
    //     },
    //     {
    //       new: true,
    //     }
    //   );

    //   return res.status(200).json({
    //     data: {
    //       __list: updateDoc,
    //     },
    //   });
    // });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

route.get("/list/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const doc = await fishList.find({
      fishId: id,
    });

    return res.status(200).json({
      data: {
        __list: doc,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = route;
