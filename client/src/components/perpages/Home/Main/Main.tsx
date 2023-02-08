import {
  useAuth,
  useClickOutside,
  useHandleScrollAtBottom,
  useLockScroll,
} from "@/hooks";
import { useEffect, useRef, useState } from "react";
import CreatePost from "./CreatePost";
import ModalCreatePost from "./ModalCreatePost";
import { Post } from "./Post";

const Main = () => {
  const { makeRequestWithAuth, user, isLoading } = useAuth();
  const { lockScroll, unlockScroll } = useLockScroll();
  const createPostRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [isOpenCreatePost, setIsOpenCreatePost] = useState(false);

  const handleOpenCreatePost = () => {
    setIsOpenCreatePost((pre) => !pre);
    lockScroll();
  };

  const handleCloseCreatePost = () => {
    setIsOpenCreatePost((pre) => !pre);
    unlockScroll();
  };

  const getPosts = async () => {
    try {
      const data = await makeRequestWithAuth("get", "/api/v1/posts", {});
      setPosts((pre) => {
        return [...pre, ...data.posts];
      });
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    getPosts();
    const controller = new AbortController();
    return () => {
      controller.abort();
      setPosts([]);
    };
  }, []);
  useHandleScrollAtBottom(() => getPosts(), 300, []);
  useClickOutside(createPostRef, handleCloseCreatePost, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full bg-space dark:bg-spaceDark">
      <div className="w-full max-w-[590px] mx-auto mt-2">
        <CreatePost
          avatarUrl={user?.avatarUrl}
          firstName={user?.firstName}
          onOpenCreatePost={handleOpenCreatePost}
        />

        <ModalCreatePost
          ref={createPostRef}
          isOpen={isOpenCreatePost}
          user={user}
          onClose={handleCloseCreatePost}
        />

        <div className="flex flex-col gap-4">
          {posts &&
            posts.map((post, index) => {
              return <Post post={post} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
