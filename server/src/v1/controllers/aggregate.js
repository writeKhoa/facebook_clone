const aggregateQuery = [
  {
    $match: {
      userId: { $in: [...friendIds, id] },
      at: {
        $gte: weekAgo,
        $lt: now,
      },
      "headerPost.audiance": { $ne: 1 },
    },
  },
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user",
    },
  },
  {
    $project: {
      _id: 1,
      content: 1,
      createdAt: 1,
      user: {
        $arrayElemAt: ["$user", 0],
      },
    },
  },
  {
    $facet: {
      posts: [{ $skip: skip }, { $limit: limit }],
      totalCount: [{ $count: "count" }],
    },
  },
];

const result = await Post.aggregate(aggregateQuery);

const posts = result[0].posts;
const totalCount = result[0].totalCount[0]?.count ?? 0;

const hasMore = skip + limit < totalCount;

res.json({ posts, hasMore });
