import { FC } from "react";

interface Props {
  avatarUrl: string;
}

const Avatar: FC<Props> = ({ avatarUrl }) => {
  return (
    <div className="w-[168px] h-[168px] rounded-full border border-divider">
      <img src={avatarUrl} className="rounded-full" alt="avatar" />
    </div>
  );
};

export default Avatar;
