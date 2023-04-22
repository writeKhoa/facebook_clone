const mongoose = require('mongoose');
const Post = require('./models/post');
const Like = require('./models/like');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

// Tạo phiên MongoDB
const session = await mongoose.startSession();

// Khởi động giao dịch
await session.startTransaction();

try {
  // Cập nhật thông tin trong Post model
  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId },
    { $set: { title: newTitle } },
    { session }
  );

  // Cập nhật thông tin trong Like model
  const updatedLike = await Like.findOneAndUpdate(
    { postId: postId },
    { $set: { likedBy: newLikedBy } },
    { session }
  );

  // Đánh dấu giao dịch đã hoàn tất
  await session.commitTransaction();

  console.log('Cập nhật thành công');
} catch (error) {
  // Nếu có lỗi, hủy giao dịch
  await session.abortTransaction();

  console.error('Lỗi khi cập nhật:', error);
} finally {
  // Kết thúc phiên MongoDB
  session.endSession();
}
