const express = require("express");
const route = express.Router();

route.use("/users", require("./users.route"));
route.use("/posts", require("./posts.route"));
route.use("/search", require("./search.route"));
route.use("/test", require("./test.route"));
route.use("/friends", require("./friends.route"));
route.use("/fishes", require("./fishes.route"));
route.use("/home", require("./home.route"));

module.exports = route;
