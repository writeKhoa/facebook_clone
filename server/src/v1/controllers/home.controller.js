const { friends, posts } = require("../models");

module.exports = that = {
  home: async function (req, res) {
    try {
      const id = req.id;
      const { page_idx, page_size } = req.query;
      const SKIP_PAGE = (Number(page_idx) - 1) * Number(page_size);
      const LIMIT_PAGE = Number(page_size);

      const friendDoc = await friends
        .findOne({ userId: id })
        .populate({
          path: "friendList.friendId",
          select: "_id avatarUrl fullName",
        })
        .select("friendList");

      const friendIds = !!friendDoc?.friendList
        ? friendDoc.friendList.map((friend) => {
            const { friendId } = friend;
            return friendId._id;
          })
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
          __contacts: friendDoc?.friendList || [],
        },
      });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ error: error.message });
    }
  },
};
