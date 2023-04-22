const express = require("express");
const { usersMiddlewares: middlewares } = require("../middlewares");
const { usersController: controller } = require("../controllers");
const { upload } = require("../utils/uploadImageLocal");
const route = express.Router();

route.get("/find/:userId", controller.find);

route.get(
  "/find-with-auth/:userId",
  middlewares.verifyAccessToken,
  controller.findWithAuth
);

route.post("/register", middlewares.validateRegister, controller.register);

route.post("/login", middlewares.validateLogin, controller.login);

route.post("/reLogin", middlewares.verifyRefreshToken, controller.reLogin);

route.post(
  "/newAccess",
  middlewares.verifyRefreshToken,
  controller.getNewAccessToken
);

route.post("/update", middlewares.verifyAccessToken, controller.updateInfo);

route.post("/logout", middlewares.verifyRefreshToken, controller.logout);

route.post(
  "/update-avatar",
  middlewares.verifyAccessToken,
  upload.single("image"),
  controller.updateAvatar
);

route.get("/contacts", middlewares.verifyAccessToken, controller.contacts);

module.exports = route;
