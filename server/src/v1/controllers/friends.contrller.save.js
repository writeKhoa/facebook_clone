const { friends, requests, users } = require("../models");
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
  // todo make friend
  makeFriend: async function (req, res) {
    try {
      // todo add id sent to requestSentList
      const { userReceivedId } = req.body;
      const id = req.id;

      // const isExistFriend = await friends.findOne({ userId: id });

      // todo add id sender to requestSentList
      const isExistRequestsOfSender = await requests.findOneAndUpdate(
        {
          userId: id,
          "requestReceivedList.userSentId": { $ne: userReceivedId },
          requestSentList: { $ne: userReceivedId },
        },
        {
          $push: {
            requestSentList: userReceivedId,
          },
          $inc: {
            requestSentCountList: 1,
          },
        }
      );

      if (!isExistRequestsOfSender) {
        const isExistDoc = await requests.findOne({ userId: id });
        if (!!isExistDoc) {
          return res.status(400).json({ message: "Đã tồn tại yêu cầu" });
        }
        const newRequestsOfSender = new requests({
          userId: id,
          requestSentList: [ObjectId(userReceivedId)],
          requestSentCountList: 1,
        });
        await newRequestsOfSender.save();
      }

      // todo add id receiver to requestReceivedList
      const isExistRequestsOfReceiver = await requests.findOneAndUpdate(
        {
          userId: userReceivedId,
          "requestReceivedList.userSentId": { $ne: id },
          requestSentList: { $ne: id },
        },
        {
          $push: { requestReceivedList: { userSentId: id } },
          $inc: { requestReceivedListCount: 1 },
        }
      );

      if (!isExistRequestsOfReceiver) {
        const isExistDoc = await requests.findOne({ userId: userReceivedId });
        if (!!isExistDoc) {
          return res.status(400).json({ message: "Đã tồn tại yêu cầu" });
        }
        const newRequestsOfReceiver = new requests({
          userId: userReceivedId,
          requestReceivedList: [
            {
              userSentId: id,
            },
          ],
          requestReceivedListCount: 1,
        });
        await newRequestsOfReceiver.save();
      }

      // todo update notify
      // await friends.findByIdAndUpdate(userReceivedId, {
      //   $pull: { notifies: { $and: [{ id: userReceivedId }, { type: 1 }] } },
      //   $inc: { notifyCount: -1 },
      // });

      // todo emit event notify
      // if (_connectedUsers[userReceivedId]) {
      //   // todo if online emit event notify
      //   await _io.to(_connectedUsers[userReceivedId]).emit("notify", {
      //     mode: 1,
      //     id: userReceivedId,
      //   });
      // }

      return res.status(200).json({});
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: error.message });
    }
  },

  // todo cancel make friend
  cancelMakeFriend: async function (req, res) {
    try {
      const { userReceivedId } = req.body;
      const id = req.id;

      // todo remove id sender to requestSentList
      await requests.findOneAndUpdate(
        {
          userId: id,
        },
        {
          $pull: {
            requestSentList: userReceivedId,
          },
          $inc: {
            requestSentCountList: -1,
          },
        }
      );

      // todo add id receiver to requestReceivedList
      await requests.findOneAndUpdate(
        {
          userId: userReceivedId,
        },
        {
          $pull: { requestReceivedList: { userSentId: id } },
          $inc: { requestReceivedListCount: -1 },
        }
      );
      // todo update notify

      return res.status(200).json({ message: "succes" });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: "Internal error" });
    }
  },

  // todo unfriend
  unfriend: async function (req, res) {
    try {
      const id = req.id;
      const { friendId } = req.body;

      await friends.findByIdAndUpdate(id, {
        $pull: { "friends.friendId": friendId },
        $inc: { friendCount: -1 },
      });

      await friends.findOneAndUpdate(
        {
          userId: friendId,
        },
        {
          $pull: {
            "friends.friendId": id,
          },
          $inc: {
            friendCount: -1,
          },
        }
      );
      return res.status(200).json();
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: error.message });
    }
  },

  // todo accept make friend
  acceptMakeFriend: async function (req, res) {
    try {
      const id = req.id;
      const { userSentId } = req.body;

      await requests.findOneAndUpdate(
        {
          userId: id,
        },
        {
          $pull: {
            requestReceivedList: { userSentId },
          },
          $inc: {
            requestReceivedListCount: -1,
          },
        }
      );

      await requests.findOneAndUpdate(
        {
          userId: userSentId,
        },
        {
          $pull: {
            requestSentList: id,
          },
          $inc: {
            requestSentCountList: -1,
          },
        }
      );

      await friends.findOneAndUpdate(
        { userId: id },
        {
          $push: {
            friendList: { friendId: userSentId },
          },
          $inc: {
            friendCount: 1,
          },
        },
        {
          upsert: true,
        }
      );

      await friends.findOneAndUpdate(
        { userId: userSentId },
        {
          $push: {
            friendList: { friendId: id },
          },
          $inc: {
            friendCount: 1,
          },
        },
        { upsert: true }
      );

      return res.status(200).json();
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: error.message });
    }
  },

  // todo deny make friend
  denyMakeFriend: async function (req, res) {
    try {
      const id = req.id;
      const { userSentId } = req.body;
      await requests.findOneAndUpdate(
        {
          userId: id,
        },
        {
          $pull: {
            requestReceivedList: { userSentId },
          },
          $inc: {
            requestReceivedListCount: -1,
          },
        }
      );

      await requests.findOneAndUpdate(
        {
          userId: userSentId,
        },
        {
          $pull: {
            requestSentList: id,
          },
          $inc: {
            requestSentCountList: -1,
          },
        }
      );
      return res.status(200).json();
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: error.message });
    }
  },

  // ! api for route friends
  // todo get requestUsers and suggestUsers
  default: async function (req, res) {
    try {
      const id = req.id;
      const friendDoc = await friends
        .findOne({ userId: id })
        .select("friendList");

      const requestDoc = await requests
        .findOne({ userId: id })
        .select("requestReceivedList requestSentList");

      const friendIds = !!friendDoc?.friendList
        ? friendDoc.friendList.map((friend) => friend.friendId)
        : [];

      const requestReceivedListIds = !!requestDoc?.requestReceivedList
        ? requestDoc.requestReceivedList.map((request) =>
            request.userSentId.toString()
          )
        : [];

      const requestSentIdsList = !!requestDoc?.requestSentList
        ? requestDoc.requestSentList.map((request) => request.toString())
        : [];

      // todo get friends
      const requestUsers = await requests
        .findOne({ userId: id })
        .populate({
          path: "requestReceivedList.userSentId",
          select: "fullName avatarUrl _id",
        })
        .select("requestReceivedList");
      const { requestReceivedList } = requestUsers;

      // todo get suggest users
      const suggestUsers = await users
        .find({
          $and: [
            { _id: { $ne: id } },
            { _id: { $nin: friendIds } },
            { _id: { $nin: requestReceivedListIds } },
            { _id: { $nin: requestSentIdsList } },
          ],
        })
        .select("fullName avatarUrl")
        .limit(20);

      return res.status(200).json({ data: { requestReceivedList, suggestUsers } });
    } catch (error) {
      console.log("error ", error.message);
      return res.status(500).json({ message: error.message });
    }
  },

  // todo requests received
  requestReceivedList: async function (req, res) {
    try {
      const id = req.id;
      const data = await requests
        .findOne({ userId: id })
        .populate({
          path: "requestReceivedList.userSentId",
          select: "fullName avatarUrl _id",
          model: "users",
        })
        .select("requestReceivedList requestReceivedListCount")
        .exec();

      return res.status(200).json({ data });
    } catch (error) {
      console.log({ error });
      return res.status(200).json({ message: error.message });
    }
  },

  // todo requests sent
  requestSentList: async function (req, res) {
    try {
      const id = req.id;
      const data = await requests
        .findOne({ userId: id })
        .populate({
          path: "requestSentList",
          select: "fullName avatarUrl",
        })
        .select("requestSentList requestSentCountList")
        .exec();
      // requestSentCount
      return res.status(200).json({ data });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: error.message });
    }
  },

  // todo suggest many people
  suggests: async function (req, res) {
    try {
      const id = req.id;
      const friendDoc = await friends
        .findOne({ userId: id })
        .select("friendList");

      const requestDoc = await requests
        .findOne({ userId: id })
        .select("requestReceivedList requestSentList");

      const friendIds = !!friendDoc?.friendList
        ? friendDoc.friendList.map((friend) => friend.friendId)
        : [];

      const requestReceivedListIds = !!requestDoc?.requestReceivedList
        ? requestDoc.requestReceivedList.map((request) =>
            request.userSentId.toString()
          )
        : [];

      const requestSentIdsList = !!requestDoc?.requestSentList
        ? requestDoc.requestSentList.map((request) => request.toString())
        : [];

      const data = await users
        .find({
          $and: [
            { _id: { $ne: id } },
            { _id: { $nin: friendIds } },
            { _id: { $nin: requestReceivedListIds } },
            { _id: { $nin: requestSentIdsList } },
          ],
        })
        .select("fullName avatarUrl")
        .limit(20);

      return res.status(200).json({ data });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ message: error.message });
    }
  },

  list: async function (req, res) {
    try {
      const id = req.id;
      const data = await friends
        .findOne({ userId: id })
        .populate({
          path: "friendList.friendId",
          select: "fullName avatarUrl",
        })
        

      return res.status(200).json({ data });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ error: error.message });
    }
  },

  // todo birthdates
  birthdates: async function (req, res) {
    try {
      return res.status(200).json({ data: "birthdates" });
    } catch (error) {}
  },
};

module.exports = that;
