import { FC } from "react";
import {
  LiveVideoIcon,
  PictureVideoIcon,
  EmotionIcon,
} from "@/components/commons/Icons";

interface Props {
  avatarUrl: string;
  firstName: string;
  onOpenCreatePost: () => void;
}

const CreatePost: FC<Props> = ({ avatarUrl, firstName, onOpenCreatePost }) => {
  return (
    <div className="px-4 pt-3 pb-[10px] mb-4 rounded-xl bg-surface dark:bg-surfaceDark">
      <div>
        <div className="flex">
          <div className="mr-2">
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src={avatarUrl}
              alt="avatar"
            />
          </div>

          <div
            className="relative w-full px-3 py-2 rounded-full bg-support dark:bg-supportDark hover:bg-black/20 dark:hover:bg-white/20 cursor-pointer"
            onClick={onOpenCreatePost}
          >
            <span className="text-1722 font-normal text-primaryText dark:text-primaryTextDark">
              {firstName} ơi, bạn đang nghĩ gì thế?
            </span>
          </div>
        </div>

        <div className="flex mt-3 pt-2 border-t boder-divider dark:border-dividerDark">
          <div className="flex-1 flex items-center p-2 rounded-lg cursor-pointer hover:bg-black/10 dark:hover:bg-white/10">
            <div className="flex justify-center w-full">
              <span className="mr-2 flex items-center">
                <LiveVideoIcon />
              </span>
              <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
                Video trực tiếp
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center p-2 rounded-lg cursor-pointer hover:bg-black/10 dark:hover:bg-white/10">
            <div className="flex justify-center w-full">
              <span className="mr-2 flex items-center">
                <PictureVideoIcon />
              </span>
              <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
                Ảnh/video
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center p-2 rounded-lg cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 max500:hidden">
            <div className="flex justify-center w-full">
              <span className="mr-2 flex items-center">
                <EmotionIcon />
              </span>
              <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
                Cảm xúc/Hoạt động
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
