import { FC } from "react";
import { CameraAvatarProfileIcon } from "@/components/commons/Icons";

interface Props {
  avatarUrl: string;
}

const Avatar: FC<Props> = ({ avatarUrl }) => {
  return (
    <div className="relative w-[168px] h-[168px] rounded-full">
      <img
        src={avatarUrl}
        alt="avatar"
        className="rounded-full cursor-pointer"
      />

      <div className="absolute right-2 bottom-2">
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 dark:bg-surfaceDark cursor-pointer">
          <CameraAvatarProfileIcon />
        </span>
      </div>
    </div>
  );
};

export default Avatar;
