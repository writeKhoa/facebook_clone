const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reactionsSchema = Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "posts", index: true },

  reactions: [
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
});

module.exports = model("reactions", reactionsSchema);
