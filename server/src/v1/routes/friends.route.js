const express = require("express");
const route = express.Router();
const { friendsController: controller } = require("../controllers");
const { usersMiddlewares: middleWare } = require("../middlewares");

// todo make-friend
route.post("/make-friend", middleWare.verifyAccessToken, controller.makeFriend);

// todo accept make friend
route.post(
  "/confirm-request-make-friend",
  middleWare.verifyAccessToken,
  controller.acceptMakeFriend
);

// todo deny make friend
route.post(
  "/deny-request-make-friend",
  middleWare.verifyAccessToken,
  controller.denyMakeFriend
);

// todo cancel make friend
route.post(
  "/cancel-request-make-friend",
  middleWare.verifyAccessToken,
  controller.cancelMakeFriend
);

// todo unfriend
route.post("unfriend", middleWare.verifyAccessToken, controller.unfriend);

// todo ---------- all --------
route.get("/", middleWare.verifyAccessToken, controller.default);

// todo ------ requests ------

route.get(
  "/requests/received",
  middleWare.verifyAccessToken,
  controller.requestReceivedList
);

route.get(
  "/requests/sent",
  middleWare.verifyAccessToken,
  controller.requestSentList
);

// todo ------ suggests ------

route.get("/suggestions", middleWare.verifyAccessToken, controller.suggests);

// todo ------- list ---------

route.get("/list", middleWare.verifyAccessToken, controller.list);

// todo ----- birthdays ------

route.get("/birthdays/", (req, res) => {
  const id = body.params;
  return res.status(200).json({ data: id });
});

module.exports = route;
