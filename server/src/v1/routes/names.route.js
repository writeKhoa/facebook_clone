const express = require("express");
const { users } = require("../models");
const route = express.Router();
const controller = require("../controllers/names.controller");

route.post("/name", controller.insertName);

module.exports = route;
