import {
  Filter,
  Post,
  ShortViewFriends,
  ShortViewImages,
} from "@/components/commons";
import { LoadingCircelIcon } from "@/components/commons/Icons/Common.Icon";
import { useAuth } from "@/hooks";
import { PostProps, ProfileProps } from "@/models";
import { getYearMonthDate } from "@/utils";
import { FC, useEffect, useState } from "react";
import { Intro, PostList } from "./sub";

interface Props {
  profile: ProfileProps;
  mode: number;
  where?: "profile" | "friend";
}

const Outlet: FC<Props> = ({ profile, mode, where = "profile" }) => {
  const { makeRequestWithAuth } = useAuth();
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [postPinned, setPostPinned] = useState<PostProps | null>(null);
  const [postPinId, setPostPinId] = useState<string>("");
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [filter, setFilter] = useState<{
    year?: number;
    month?: number;
    date?: number;
  }>({ year: undefined, month: undefined, date: undefined });

  const handleConfirm = (year?: number, month?: number, date?: number) => {
    setFilter({ year, month, date });
    setIsOpenFilter(false);
  };

  const handleReset = () => {
    setFilter({ year: undefined, month: undefined, date: undefined });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await makeRequestWithAuth(
          "get",
          `/api/v1/posts/other-posts?userId=${profile._id}&mode=${mode}`
        );
        setPosts(data?.__posts);
        if (data?.__pinPostId) {
          setPostPinId(data.__pinPostId);
        }
        if (data?.__pinPost) {
          setPostPinned(data.__pinPost);
        }
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);
  return (
    <div className="w-full bg-space dark:bg-spaceDark">
      <div className="w-max-1050 mx-auto px-4 pt-4">
        <div
          className={`${
            where === "profile" ? "max900:flex-col" : "max1260:flex-col"
          } flex -m-2 max900:flex-col`}
        >
          <div
            className={`${
              where === "profile"
                ? "max900:flex-1 max900:mx-auto"
                : "max1260:flex-1 max1260:mx-auto"
            } flex-[2]  m-2 w-full max-w-2xl `}
          >
            <div className="flex flex-col">
              <div className="mb-5">
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

          <div
            className={`${
              where === "profile"
                ? "max900:flex-1 max900:grow max900:mx-auto"
                : "max1260:flex-1 max1260:grow max1260:mx-auto"
            } flex-[3] w-full  m-2 max-w-2xl  pb-4`}
          >
            <div className="w-full mb-4">
              <Filter
                isOpen={isOpenFilter}
                onClose={() => setIsOpenFilter(false)}
                onOpen={() => setIsOpenFilter(true)}
                onConfirm={handleConfirm}
                onReset={handleReset}
              />
            </div>
            {isLoading ? (
              <div className="flex justify-center items-center w-full h-10">
                <div className="animate-spin text-primary">
                  <LoadingCircelIcon width={40} height={40} />
                </div>
              </div>
            ) : (
              <>
                {!!postPinId && (
                  <div className="mb-5">
                    <div className="mb-2">
                      <span className="text-1520 font-semibold text-secondaryText dark:text-secondaryTextDark">
                        Bài viết đã ghim
                      </span>
                    </div>
                    <Post
                      post={postPinned as PostProps}
                      view={"my-post"}
                      isPinned={postPinId === postPinned?._id}
                      where="profile"
                    />
                  </div>
                )}

                {!!postPinId && posts.length > 0 && (
                  <div className="mt-5 mb-2">
                    <span className="text-1520 font-semibold text-secondaryText dark:text-secondaryTextDark">
                      Bài viết khác
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-5 w-full">
                  {posts.length > 0 ? (
                    <PostList
                      posts={posts}
                      pinPostId={postPinId}
                      filter={filter}
                    />
                  ) : (
                    <div className="flex justify-center my-4">
                      <span className="text-2024 font-bold text-primaryText dark:text-primaryTextDark">
                        Không có bài viết
                      </span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outlet;
