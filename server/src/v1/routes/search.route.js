const express = require("express");
const { searchController: controller } = require("../controllers");
const { usersMiddlewares: middlewares } = require("../middlewares");

const route = express.Router();

route.post("/", middlewares.verifyAccessToken, controller.search);

module.exports = route;
