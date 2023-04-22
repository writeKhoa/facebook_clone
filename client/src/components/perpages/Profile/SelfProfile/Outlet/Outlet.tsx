import {
  Post,
  ShortViewFriends,
  ShortViewImages,
  CreatePost,
  ModalCreatePost,
} from "@/components/commons";
import { useAuth, usePosts } from "@/hooks";
import { PostProps, ProfileProps } from "@/models";
import { FC, useEffect } from "react";
import { Intro, PostList } from "./sub";

interface Props {
  profile: ProfileProps;
}

const Outlet: FC<Props> = ({ profile }) => {
  const { user, makeRequestWithAuth } = useAuth();

  const {
    posts,
    pinPost,
    pinPostId,
    isOpenEditor,
    setPosts,
    setIsOpenEditor,
    setPinPostId,
    setModeEditor,
    setFormActive,
    setPinPost,
  } = usePosts();

  const handleOpenCreatePost = () => {
    setIsOpenEditor((pre) => !pre);
    setModeEditor("create");
  };

  const handleOpenFeeling = () => {
    setIsOpenEditor((pre) => !pre);
    setFormActive("feeling");
  };

  const handleOpenAddImage = () => {
    setIsOpenEditor((pre) => !pre);
    setFormActive("defaultAndImage");
  };
  const handleCloseCreatePost = () => {
    setIsOpenEditor((pre) => !pre);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await makeRequestWithAuth(
        "get",
        `/api/v1/posts/my-posts/${profile._id}`
      );
      setPosts(data?.__posts);
      if (data.__pinPostId) {
        setPinPostId(data.__pinPostId);
      }
      if (data.__pinPost) {
        setPinPost(data.__pinPost);
      }
    };

    getData();
  }, []);
  return (
    <div className="w-full bg-space dark:bg-spaceDark">
      <div className="w-max-1050 mx-auto px-4 pt-4">
        <div className="relative flex -m-2 max900:flex-col">
          <div className="flex-[2] h-[1000px] max900:w-full m-2 max-w-2xl max900:mx-auto z-1">
            <div className="sticky bottom-0 flex flex-col w-full">
              <div className="mb-5 w-full">
                <Intro />
              </div>

              <div className="mb-5">
                <ShortViewImages imageUrlList={profile.imageUrlList} />
              </div>

              <div className="mb-5">
                <ShortViewFriends friendData={profile.friends} />
              </div>
            </div>
          </div>

          <div className="flex-[3] w-full max900:flex-1 m-2 max-w-2xl max900:mx-auto min-h-screen">
            <CreatePost
              id={user?._id || ""}
              avatarUrl={user?.avatarUrl || ""}
              firstName={user?.firstName || ""}
              onOpenCreatePost={handleOpenCreatePost}
              onOpenAddImage={handleOpenAddImage}
              onOpenAddFeeling={handleOpenFeeling}
            />
            {pinPostId && (
              <div className="mb-5">
                <div className="mb-2">
                  <span className="text-1520 font-semibold text-secondaryText dark:text-secondaryTextDark">
                    Bài viết đã ghim
                  </span>
                </div>
                <Post
                  post={pinPost as PostProps}
                  view={"my-post"}
                  isPinned={pinPostId === pinPost?._id}
                  where="profile"
                />
              </div>
            )}
            {pinPostId && posts.length > 0 && (
              <div className="mt-5 mb-2">
                <span className="text-1520 font-semibold text-secondaryText dark:text-secondaryTextDark">
                  Bài viết khác
                </span>
              </div>
            )}

            <PostList posts={posts} pinPostId={pinPostId} />

            {isOpenEditor && (
              <ModalCreatePost
                isOpen={isOpenEditor}
                onClose={handleCloseCreatePost}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outlet;
