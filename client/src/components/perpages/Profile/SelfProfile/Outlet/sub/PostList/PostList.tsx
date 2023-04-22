import { Post } from "@/components/commons";
import { useAuth } from "@/hooks";
import { PostProps } from "@/models";
import { FC, memo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  posts: PostProps[];
  pinPostId: string;
}

const PostList: FC<Props> = memo(({ posts, pinPostId }) => {
  const [renderedCount, setRenderCount] = useState(10);
  const { user } = useAuth();

  const getPosts = () => setRenderCount((pre) => pre + 10);
  return (
    <InfiniteScroll
      dataLength={renderedCount}
      next={getPosts}
      hasMore={renderedCount < posts.length}
      loader={<h4>Loading...</h4>}
    >
      <div className="flex flex-col gap-4 overflow-hidden">
        {posts &&
          posts.slice(0, renderedCount).map((post) => {
            return (
              <Post
                key={post._id}
                post={post}
                view={post.userId._id === user?._id ? "my-post" : "other-post"}
                isPinned={pinPostId === post._id}
                where="profile"
              />
            );
          })}
      </div>
    </InfiniteScroll>
  );
});

export default PostList;
