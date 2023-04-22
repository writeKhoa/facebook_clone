import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { reactEmotions } from "@/configs";

interface Props {
  typeReaction: number;
  userId: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
}

const ReactItem: FC<Props> = ({ userId, typeReaction }) => {
  const { _id, fullName, avatarUrl } = userId;
  const Icon = reactEmotions[typeReaction].Icon;
  return (
    <div className="px-2">
      <div className="flex px-2">
        <div className="relative my-2 mr-3">
          <LazyLoadImage
            src={avatarUrl}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="absolute bottom-0 right-0">
            <Icon />
          </div>
        </div>

        <div className="flex items-center">
          <Link to={`/${_id}`}>
            <span className="text-1520 text-primaryText dark:text-primaryTextDark font-semibold hover:underline">
              {fullName}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReactItem;
