const { checkGmail, checkNumberPhone } = require("./check");
const removeVietnameseTones = require("./convertText");
const { hashPassword, comparePassword } = require("./password");
const { timeExRefreshTokenCookie } = require("./time");
const {
  generateAccessToken,
  generateRefreshToken,
  decodeAccessToken,
  decodeRefreshToken,
} = require("./token");

module.exports = {
  checkGmail,
  checkNumberPhone,
  removeVietnameseTones,
  hashPassword,
  comparePassword,
  timeExRefreshTokenCookie,
  generateAccessToken,
  generateRefreshToken,
  decodeAccessToken,
  decodeRefreshToken,
};
