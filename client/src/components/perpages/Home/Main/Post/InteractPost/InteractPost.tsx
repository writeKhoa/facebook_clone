import { FC } from "react";
import { CommentIcon, LikeIcon, ShareIcon } from "@/components/commons/Icons";
import { EmotionLike } from "@/assets/svg";
import { processCount } from "@/utils";

interface Props {
  likeCount: number;
  commentCount: number;
  shareCount: number;
}

const InteractPost: FC<Props> = ({ likeCount, commentCount, shareCount }) => {
  return (
    <div>
      <div className="mx-4 py-[10px] h-[42px]">
        <div className="flex justify-between text-1418 font-normal text-secondaryText dark:text-secondaryTextDark">
          <div className="flex items-center">
            <span className="mr-1">
              <img src={EmotionLike} className="w-[18px] h-[18px]" alt="" />
            </span>
            <span>{processCount(likeCount)}</span>
          </div>
          <div>
            <span className="mr-1 ">{commentCount}</span>
            <span>bình luận</span>

            <span className="ml-2 mr-1">
              {shareCount > 0 ? `${shareCount} chia sẻ` : ""}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-3 py-1 border-t border-divider dark:border-dividerDark">
        <div className="flex -my-2 -mx-[2px] p-1">
          <div className="flex-1 flex  justify-center items-center h-[44px] px-[2px] py-2 cursor-pointer">
            <div className="grow flex items-center justify-center -mx-1 -my-[6px] px-3 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
              <div className="flex items-center px-1 py-[6px]">
                <span>
                  <LikeIcon />
                </span>
              </div>
              <div className="flex items-center px-1 py-[6px]">
                <span className="text-1418 font-semibold text-secondaryText dark:text-secondaryTextDark">
                  Thích
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex  justify-center items-center h-[44px] px-[2px] py-[6px] cursor-pointer">
            <div className="grow flex items-center justify-center -mx-1 -my-[6px] px-3 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
              <div className="flex items-center px-1 py-[6px]">
                <span>
                  <CommentIcon />
                </span>
              </div>
              <div className="flex items-center px-1 py-[6px]">
                <span className="text-1418 font-semibold text-secondaryText dark:text-secondaryTextDark">
                  Bình luận
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex  justify-center items-center h-[44px] px-[2px] py-[6px] cursor-pointer">
            <div className="grow flex items-center justify-center -mx-1 -my-[6px] px-3 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
              <div className="px-1 py-[6px]">
                <span>
                  <ShareIcon />
                </span>
              </div>
              <div className="flex items-center px-1 py-[6px]">
                <span className="text-1418 font-semibold text-secondaryText dark:text-secondaryTextDark">
                  Chia sẻ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InteractPost;
