const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const friendsSchema = Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", index: true },

  friendList: [
    {
      friendId: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      at: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  friendCount: {
    type: Number,
    default: 0,
    max: 5000,
  },
});

module.exports = model("friends", friendsSchema);
