const { users, friends } = require("../models");
const { removeVietnameseTones } = require("../utils");

const that = {
  search: async function (req, res) {
    try {
      const id = req.id;
      const { fullName } = req.body;

      const friendIds = await friends
        .findOne({ userId: id })
        .select("friendList")
        .then((result) => {
          if (result?.friendList.length > 0) {
            return result.friendList.map((item) => {
              return item.friendId.toString();
            });
          } else {
            return [];
          }
        });

      const newFullName = removeVietnameseTones(fullName).toLowerCase();

      const usersDocs = await users
        .find({ fullNameSearch: { $regex: newFullName } })
        .select({ fullName: 1, id: 1, avatarUrl: 1 })
        .limit(8)
        .lean();

      if (friendIds.length === 0) {
        const data = usersDocs.map((user) => {
          if (user._id.toString() === id) {
            return { ...user, type: "yourself" };
          } else {
            return user;
          }
        });
        return res.status(200).json({ data });
      }

      const data = usersDocs.map((user) => {
        if (user._id.toString() === id) {
          return { ...user, type: "yourself" };
        } else if (friendIds.includes(user._id.toString())) {
          return { ...user, type: "friend" };
        } else {
          return user;
        }
      });

      return res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = that;
