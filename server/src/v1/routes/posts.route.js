const express = require("express");
const { postsController: controller } = require("../controllers");
const { upload } = require("../utils/uploadImageLocal");
const { usersMiddlewares: middlewares } = require("../middlewares");

const route = express.Router();

route.get(
  "/my-posts/:userId",
  middlewares.verifyAccessToken,
  controller.myPosts
);

route.get("/other-posts", middlewares.verifyAccessToken, controller.otherPosts);

route.get("/home-posts/", middlewares.verifyAccessToken, controller.homePosts);

route.get(
  "/details/:postId",
  middlewares.verifyAccessToken,
  controller.detailReaction
);

route.post(
  "/upload-multer",
  middlewares.verifyAccessToken,
  upload.single("image"),
  controller.uploadMulter
);

route.post("/delete", middlewares.verifyAccessToken, controller.deletePost);

route.post(
  "/react",
  middlewares.verifyAccessToken,
  controller.reactEmotionPost
);

route.post(
  "/cancel-react",
  middlewares.verifyAccessToken,
  controller.cancelReactEmotionPost
);

route.post(
  "/change-react",
  middlewares.verifyAccessToken,
  controller.changeReactEmotionPost
);

route.post("/pin-post", middlewares.verifyAccessToken, controller.pinPost);

route.post("/unpin-post", middlewares.verifyAccessToken, controller.unPinPost);

route.put(
  "/update",
  middlewares.verifyAccessToken,
  upload.single("image"),
  controller.updatePost
);

module.exports = route;
