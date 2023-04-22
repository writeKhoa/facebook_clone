import { ShortProfileItem } from "@/models";
import { FriendStateItem } from "@/store";
import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface Props {
  props: FriendStateItem;
  onSelect: () => void;
  isActive: boolean;
}

const FriendItem: FC<Props> = ({ props, onSelect, isActive }) => {
  const { _id, fullName, avatarUrl } = props;
  return (
    <div className="mx-2">
      <Link to={`/friends/list/${_id}`}>
        <div
          className={`${
            isActive
              ? "bg-black/10 dark:bg-white/10"
              : "hover:bg-black/10 dark:hover:bg-white/10"
          } px-2 h-full rounded-md`}
          onClick={onSelect}
        >
          <div className="flex h-full">
            <div className="mr-3 py-2 shrink-0">
              <LazyLoadImage
                width={60}
                height={60}
                className="rounded-full"
                src={avatarUrl}
                alt=""
              />
            </div>

            <div className="w-full h-full py-5">
              <span className="text-1418 text-primaryText dark:text-primaryTextDark font-semibold">
                {fullName}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendItem;
