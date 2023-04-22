import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  mediumAvatarUrl: string;
}

const Avatar: FC<Props> = ({ mediumAvatarUrl }) => {
  return (
    <div className="relative w-[168px] h-[168px] rounded-full">
      <LazyLoadImage
        src={mediumAvatarUrl}
        width={200}
        height={200}
        alt="avatar"
        className="rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Avatar;
