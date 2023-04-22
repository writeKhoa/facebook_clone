const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const namesSchema = new Schema({
  namesList: {
    type: Map,
    of: {
      name: String,
      id: String,
      age: Number,
    },
  },
});

module.exports = model("names", namesSchema);
