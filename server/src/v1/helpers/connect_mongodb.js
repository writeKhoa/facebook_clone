const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const mongUri =
  process.env.NODE_ENV === "development"
    ? "mongodb://localhost:27017/facebook"
    : process.env.MONGO_URI;

const connectMongodb = async () => {
  try {
    await mongoose.connect(mongUri);
  } catch (error) {
    console.log(error?.message);
  }
};

module.exports = connectMongodb;
