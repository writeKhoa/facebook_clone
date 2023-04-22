const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const requestsSchema = Schema({
  userId: { type: Schema.Types.ObjectId, ref: "users", index: 1 },

  requestSentList: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],

  requestSentCount: {
    type: Number,
    default: 0,
    max: 5000,
  },

  requestReceivedList: [
    {
      userSentId: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      at: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  requestReceivedCount: {
    type: Number,
    default: 0,
    max: 5000,
  },
});

module.exports = model("requests", requestsSchema);
