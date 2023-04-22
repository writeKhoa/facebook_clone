const express = require("express");
const route = express.Router();
const { usersMiddlewares: middlewares } = require("../middlewares");
const { upload } = require("../utils/uploadImageLocal");

const {
  uploadImageToCloundinary,
} = require("../services/uploadImage.cloudinary");

route.post(
  "/upload",
  middlewares.verifyAccessToken,
  upload.single("image"),
  (req, res) => {
    try {
      const url = req.protocol + "://" + req.get("host");
      const imagePath = req.file.filename;
      const imgUrl = url + "/public/" + imagePath;
      return res.status(200).json({ data: imgUrl });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }
);

route.post(
  "/upload-base64",
  middlewares.verifyAccessToken,
  async (req, res) => {
    try {
      const { imgBase64 } = req.body;

      const uploadResult = await uploadImageToCloundinary(imgBase64);

      return res.status(200).json({ data: uploadResult.secure_url });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

module.exports = route;
