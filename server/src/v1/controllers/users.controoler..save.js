const {
  generateAccessToken,
  generateRefreshToken,
  timeExRefreshTokenCookie,
} = require("../utils");
const { users, friends, requests } = require("../models");
const {
  uploadImageToCloundinary,
} = require("../services/uploadImage.cloudinary");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// todo -1: notfound
// todo  0: view as guest
// todo  1: view as self profile
// todo  2: view as friend profile
// todo  3: view as request reveice
// todo  4: view as request sent
// todo  5: view as other profile

const that = {
  find: async function (req, res) {
    try {
      const { userId } = req.params;
      if (!ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Wrong id user" });
      }
      const user = await users.findById(userId);
      if (!user) {
        return res.status(400).json({ user: {}, mode: -1 });
      }
      return res.status(200).json({ user, mode: 0 });
    } catch (error) {
      return res.status(500).json({ message: "Internal Error" });
    }
  },

  findWithAuth: async function (req, res) {
    try {
      const { userId } = req.params;
      const id = req.id;
      if (!ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Wrong id user" });
      }
      const user = await users.findById(userId);
      const friendList = await friends.findOne({ userId: id });

      // const friend = await friendsSchema.aggregate([  { $match: { userId: userId } },  { $project: { _id: 0, friendList: { $slice: ['$friendList', 100, 20] } } }]);

      // todo if user dont exist is not found -1
      if (!user) {
        return res.status(400).json({ user: {}, mode: -1 });
      }

      //todo yourself ::: mode = 1
      if (userId === id) {
        return res.status(200).json({ user, mode: 1 });
      }

      //todo friends ::: mode = 2
      const friendDoc = await friends.findOne({ userId: id });

      if (!!friendDoc) {
        const isfriend = friendDoc.friendList.find(
          (friend) =>
            friend.friendId && friend.friendId.toHexString() === userId
        );
        if (!!isfriend) {
          return res.status(200).json({ user, mode: 2 });
        }
      }

      const requestDoc = await requests.findOne({ userId: id });

      if (!!requestDoc) {
        // todo request received ::: mode = 3
        const isRequestReceived = requestDoc?.requestsReceived.find(
          (requestReceived) => {
            return (
              requestReceived.userSentId &&
              requestReceived.userSentId.toHexString() === userId
            );
          }
        );

        if (!!isRequestReceived) {
          return res.status(200).json({ user, mode: 3 });
        }

        // todo request sent ::: mode = 4
        const isRequestSent = requestDoc?.requestSentList.find((requestSent) => {
          return requestSent && requestSent.toHexString() === userId;
        });
        if (!!isRequestSent) {
          return res.status(200).json({ user, mode: 4 });
        }
      }

      // todo other profile
      return res.status(200).json({ user, mode: 5 });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: error.message });
    }
  },

  notify: async function (req, res) {},

  register: async function (req, res) {
    try {
      const user = req.user;
      const newUser = new users({ ...user });
      await newUser.save();
      return res.status(200).json({ message: "Tạo tài khoản thành công" });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: error.message });
    }
  },

  login: async function (req, res) {
    try {
      const { _id, fullName, avatarUrl, notifyCount, firstName, surnName } =
        req.user;
      const id = req.id;
      const accessToken = await generateAccessToken(id);
      const refreshToken = await generateRefreshToken(id);

      await users.findByIdAndUpdate(id, {
        $push: { refreshTokenList: refreshToken },
      });

      return res
        .status(200)
        .cookie("refreshToken", refreshToken, {
          httpOnly: false,
          expires: timeExRefreshTokenCookie(),
          secure: true,
          sameSite: "none",
        })
        .json({
          accessToken,
          user: { _id, fullName, avatarUrl, notifyCount, firstName, surnName },
        });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  reLogin: async function (req, res) {
    try {
      const id = req.id;
      const { _id, fullName, avatarUrl, notifyCount, firstName, surnName } =
        req.user;
      const oldRefreshToken = req.oldRefreshToken;

      const accessToken = await generateAccessToken(id);
      const refreshToken = await generateRefreshToken(id);

      await users.findByIdAndUpdate(id, {
        $push: { refreshTokenList: refreshToken },
      });
      await users.findByIdAndUpdate(id, {
        $pull: { refreshTokenList: oldRefreshToken },
      });

      return res
        .status(200)
        .cookie("refreshToken", refreshToken, {
          expires: timeExRefreshTokenCookie(),
          httpOnly: false,
          sameSite: "none",
          secure: true,
        })
        .json({
          accessToken,
          user: { _id, fullName, avatarUrl, notifyCount, firstName, surnName },
        });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  getNewAccessToken: async function (req, res) {
    try {
      const id = req.id;
      const accessToken = await generateAccessToken(id);
      return res.status(200).json({ accessToken });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  logout: async function (req, res) {
    try {
      const id = req.id;
      const oldRefreshToken = req.oldRefreshToken;
      await users.findByIdAndUpdate(id, {
        $pull: { refreshTokenList: oldRefreshToken },
      });

      return res
        .status(200)
        .clearCookie("refreshToken")
        .json({ message: "logout thành công" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  updateInfo: async function (req, res) {
    try {
      const id = req.id;
      const update = req.body;
      console.log("update ", update);
      const user = await users.findByIdAndUpdate(id, update);
      console.log("user ", user);
      return res.status(200).json({ message: "success" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  updateAvatar: async function (req, res) {
    try {
      const { avatar } = req.body;
      const id = req.id;
      const data = await uploadImageToCloundinary(avatar);
      console.log("data ", data);
      // await findByIdAndUpdate(id, { avatarUrl: data.secure_url });

      return res.status(200).json({ data: data.secure_url });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = that;
