import { Link } from "react-router-dom";

const NoMorePosts = () => {
  return (
    <div className="w-full px-5 py-10 rounded-lg bg-surface dark:bg-surfaceDark text-center my-5">
      <div>
        <h2 className="text-primaryText dark:text-primaryTextDark font-semibold text-2024">
          Không còn bài viết nào nữa
        </h2>
      </div>
      <div>
        <span className="text-1418 text-secondaryText dark:text-secondaryText">
          Thêm nhiều bạn bè hơn để thấy nhiều bài viết trong Bảng tin của bạn.
        </span>
      </div>
      <Link to={`/friends`}>
        <div className="inline-block mt-5 px-4 h-9 box-content rounded-md bg-primary text-1214">
          <div className="flex items-center h-full">
            <span className="text-primaryText dark:text-primaryTextDark font-semibold text-1418">
              Tìm bạn bè
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NoMorePosts;
