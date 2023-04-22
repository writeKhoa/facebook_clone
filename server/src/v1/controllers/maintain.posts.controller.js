const mongoose = require("mongoose");
const { posts, friends, users } = require("../models");
const { removeVietnameseTones } = require("../utils");
const fs = require("fs");
const path = require("path");
const url = require("url");
const sharp = require("sharp");

const that = {
  myPosts: async (req, res) => {
    try {
      const userId = req.params.userId;

      const postDoc = await posts
        .find({ userId: userId })
        .populate({
          path: "userId",
          select: "fullName avatarUrl",
        })
        .sort({ createdAt: -1 });

      return res.status(200).json({ data: { __posts: postDoc } });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  homePosts: async (req, res) => {
    try {
      const id = req.id;
      const { page_idx, page_size } = req.query;
      const SKIP_PAGE = (Number(page_idx) - 1) * Number(page_size);
      const LIMIT_PAGE = Number(page_size);

      const friendDoc = await friends
        .findOne({ userId: id })
        .select("friendList");

      const friendIds = !!friendDoc?.friendList
        ? friendDoc.friendList.map((friend) => friend.friendId.toString())
        : [];

      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      const postDocs = await posts
        .find({
          userId: { $in: [...friendIds, id] },
          at: {
            $gte: weekAgo,
            $lt: now,
          },
          "headerPost.audiance": { $ne: 1 },
        })
        .populate({
          path: "userId",
          select: "fullName avatarUrl",
        })
        .sort({ createdAt: -1 })
        .skip(SKIP_PAGE)
        .limit(LIMIT_PAGE);

      return res.status(200).json({
        data: {
          __posts: postDocs,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  singlePost: async (req, res) => {
    try {
      const { postId } = req.params;
      const postDoc = await posts.findById(postId);

      console.log(postDoc);

      return res.status(200).json({
        data: {
          __post: postDoc,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  reactEmotionPost: async (req, res) => {
    try {
      const { postId, userId, typeReaction } = req.body;

      // todo modify type array
      await posts.findByIdAndUpdate(postId, {
        $inc: {
          countReaction: 1,
          [`countTypeReaction.${typeReaction}.count`]: 1,
        },
        $push: {
          reactions: { userId, typeReaction },
        },
      });

      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  cancelReactEmotionPost: async (req, res) => {
    try {
      const { postId, userId, typeReaction } = req.body;

      await posts.findByIdAndUpdate(postId, {
        $inc: {
          countReaction: -1,
          [`countTypeReaction.${typeReaction}.count`]: -1,
        },
        $full: {
          reactions: { userId },
        },
      });

      return res.status(200).json({ status: "successed" });
    } catch (error) {
      return res.status(500).json({ status: "failed", error: error.message });
    }
  },

  changeReactEmotionPost: async (req, res) => {
    try {
      const { userId, postId, preTypeReaction, typeReaction } = req.body;
      await posts.findOneAndUpdate(
        { _id: postId, "reactions.userId": userId },
        {
          $set: {
            "reactions.$.typeReaction": typeReaction,
          },
          $inc: {
            [`countTypeReaction.${preTypeReaction}.count`]: -1,
            [`countTypeReaction.${typeReaction}.count`]: 1,
          },
        }
      );
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // mentions: async (req, res) => {
  //   try {
  //     const id = req.id;
  //     const searchMention = req.query.search;

  //     const newSearch = removeVietnameseTones(searchMention).toLowerCase();

  //     const mentions = await friends.aggregate([
  //       {
  //         $match: { userId: mongoose.Types.ObjectId(id) },
  //       },
  //       {
  //         $unwind: "$friendList",
  //       },
  //       {
  //         $lookup: {
  //           from: "users",
  //           localField: "friendList.friendId",
  //           foreignField: "_id",
  //           as: "friends",
  //         },
  //       },
  //       {
  //         $unwind: "$friend",
  //       },
  //       {
  //         $match: {
  //           $or: [
  //             {
  //               "friend.fullNameSearch": { $regex: new RegExp(newSearch, "i") },
  //             },
  //           ],
  //         },
  //       },
  //       {
  //         $project: {
  //           _id: "$friend._id",
  //           fullName: "$friend.fullName",
  //           avatarUrl: "$friend.avatarUrl",
  //         },
  //       },
  //     ]);

  //     return res.status(200).json({
  //       data: {
  //         __mentions: mentions || [],
  //       },
  //     });
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // },

  uploadMulter: async (req, res) => {
    try {
      const id = req.id;
      const { post, headerPost } = req.body;

      const postObject = JSON.parse(post);
      const headerPostObject = JSON.parse(headerPost);

      const url = req.protocol + "://" + req.get("host");

      const { filename: imagePath } = req?.file;

      if (!imagePath) {
        const newPost = new posts({
          userId: id,
          contentPost: postObject,
          headerPost: headerPostObject,
        });
        await newPost.save();
        return res.status(200).json();
      }

      await sharp(req.file.path)
        .resize(400, 400)
        .jpeg({ quality: 90 })
        .toFile(path.resolve(req.file.destination, "resized", imagePath));
      fs.unlinkSync(req.file.path);

      const imgUrl = url + "/public/resized/" + imagePath;

      const newPost = new posts({
        userId: id,
        contentPost: {
          ...postObject,
          imageUrl: imgUrl,
        },
        headerPost: {
          ...headerPostObject,
        },
      });
      await newPost.save();
      await users.findByIdAndUpdate(id, {
        $push: {
          imageUrlList: {
            $each: [
              {
                imgUrl,
                postId: newPost._id,
              },
            ],
            $position: 0,
          },
        },
      });

      return res.status(200).json({ data: { __post: newPost } });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ error: error.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      const id = req.id;
      const { postId } = req.body;

      const docDeleted = await posts.findByIdAndRemove(postId);
      if (docDeleted.contentPost.imageUrl) {
        const imageUrl = docDeleted.contentPost.imageUrl;
        const parsedUrl = url.parse(imageUrl);
        const srcPath = path.join(__dirname, "../../../");
        const imagePath = path.join(srcPath, parsedUrl.pathname);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      }
      await users.findByIdAndUpdate(id, {
        $pull: { imageUrlList: { postId } },
      });
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  detailReaction: async (req, res) => {
    try {
      const { postId } = req.params;

      const doc = await posts
        .findById(postId)
        .populate({
          path: "reactions.userId",
          select: "fullName avatarUrl",
        })
        .select("reactions countTypeReaction countReaction")
        .exec();

      return res.status(200).json({
        data: {
          __reactions: doc.reactions,
          __countTypeReaction: doc.countTypeReaction,
          __countReaction: doc.countReaction,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = that;
