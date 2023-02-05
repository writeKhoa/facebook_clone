import { FC } from "react";

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
    </div>
  );
};

export default Avatar;
