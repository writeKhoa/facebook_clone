const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
dotenv.config();

const postsSchema = Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users", index: 1 },

    headerPost: {
      tags: [
        {
          tagId: String,
          fullName: String,
        },
      ],

      audiance: {
        type: Number,
        enum: [1, 2, 3],
        // 0: private
        // 1: friends
        // 2: global
        default: 1,
      },

      feeling: {
        type: Number,
      },
    },

    contentPost: {
      format: {
        type: Number,
        enum: [1, 2],
      },

      content: {
        type: String,
        required: function () {
          return !this.imageUrl;
        },
      },

      background: {
        type: Number,
      },

      imageUrl: {
        type: String,
        required: function () {
          return !this.content;
        },
      },
    },

    countReaction: {
      type: Number,
      default: 0,
    },

    countTypeReaction: {
      type: [
        {
          count: Number,
          typeReaction: Number,
        },
      ],
      default: [
        { count: 0, typeReaction: 0 },
        { count: 0, typeReaction: 1 },
        { count: 0, typeReaction: 2 },
        { count: 0, typeReaction: 3 },
        { count: 0, typeReaction: 4 },
        { count: 0, typeReaction: 5 },
        { count: 0, typeReaction: 6 },
      ],
    },
    reactions: {
      type: [
        {
          userId: {
            type: Schema.Types.ObjectId,
            ref: "users",
          },
          typeReaction: {
            type: Number,
            enum: [0, 1, 2, 3, 4, 5, 6],
            required: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

// postsSchema.pre("findOneAndUpdate", function (next) {
//   console.log(this);
//   next();
// });

module.exports = model("posts", postsSchema);
