const express = require("express");
const route = express.Router();
const { usersMiddlewares: middleWare } = require("../middlewares");
const { homesController: controller } = require("../controllers");

route.get("/", middleWare.verifyAccessToken, controller.home);

module.exports = route;
