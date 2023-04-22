const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { removeVietnameseTones } = require("../utils");

const usersSchema = Schema({
  numberPhone: {
    type: String,
  },

  gmail: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },

  pinPost: {
    type: String,
  },

  avatarUrl: {
    type: String,
    default:
      "https://res.cloudinary.com/ddzuix68c/image/upload/v1678496261/facebook/avatar50x50_yajlvw.png",
  },

  mediumAvatarUrl: {
    type: String,
    default:
      "https://res.cloudinary.com/ddzuix68c/image/upload/v1670297596/facebook/vip_tyj8hj.png",
  },

  backgroundUrl: {
    type: String,
    default: "",
  },

  firstName: {
    type: String,
    required: true,
    default: "",
  },

  surnName: {
    type: String,
    required: true,
    default: "",
  },

  fullNameSearch: {
    type: String,
    required: true,
    default: function () {
      const fullName = `${this.firstName} ${this.surnName}`;
      const newFullName = removeVietnameseTones(fullName);
      return newFullName.toLowerCase();
    },
  },

  fullName: {
    type: String,
    required: true,
    default: function () {
      return `${this.firstName.trim()} ${this.surnName.trim()}`;
    },
  },

  // ------------- GENDER --------------
  gender: {
    type: Number,
    enum: [0, 1, 2],
    // 0: female
    // 1: male
    // 2: other
    required: true,
  },
  pronounce: {
    type: String,
  },
  // -------------- GENDER --------------

  // ----------- DATEOFBIRTH --------------
  dateOfBirth: {
    type: [{ type: Number, required: true }],
    // arr[0]: date
    // arr[1]: month
    // arr[2]: year
    required: true,
  },
  audienceDateOfBirth: {
    type: Number,
    enum: [0, 1, 2],
    // 0: private
    // 1: friends
    // 2: global
    default: 0,
  },
  // ----------- DATEOFBIRTH --------------

  bio: {
    type: String,
    max: 101,
    default: "",
  },

  // ----------------------- images ---------------------
  imageUrlList: [
    {
      imgUrl: {
        type: String,
      },
      postId: {
        type: String,
      },
    },
  ],
  refreshToken: {
    type: String,
    default: "",
  },
});

module.exports = model("users", usersSchema);
