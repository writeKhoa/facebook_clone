import { FC } from "react";
import { PostModel } from "@/models";
import HeadPost from "./HeadPost";
import ContentPost from "./ContentPost";
import InteractPost from "./InteractPost";

interface Props {
  post: PostModel;
}

export const Post: FC<Props> = ({ post }) => {
  const {
    type,
    fullName,
    avatarUrl,
    createAt,
    audience,
    title,
    image,
    commentCount,
    likeCount,
    shareCount,
  } = post;
  return (
    <div className="bg-surface dark:bg-surfaceDark rounded-xl">
      <HeadPost
        fullName={fullName}
        avatarUrl={avatarUrl}
        audience={audience}
        createAt={createAt}
      />
      <ContentPost title={title} />
      <InteractPost
        likeCount={likeCount}
        commentCount={commentCount}
        shareCount={shareCount}
      />
    </div>
  );
};
