import { ShortProfileItem } from "@/models";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  fullName: string;
  friends: {
    friendList: ShortProfileItem[];
    friendCount: number;
  };
  where?: "profile" | "friend";
}

const ShortInfo: FC<Props> = ({ fullName, friends, where }) => {
  const friendsSlice = friends.friendList.slice(0, 7);
  return (
    <div>
      <div className="">
        <h1 className="text-3238 font-bold text-primaryText dark:text-primaryTextDark">
          {fullName}
        </h1>
      </div>

      <div
        className={`${
          where === "profile" ? "max900:text-center" : "max1260:text-center"
        } pt-4 -mt-2 h-3 box-content`}
      >
        <span className="text-secondaryText dark:text-secondaryTextDark text-1716 font-medium hover:underline cursor-pointer">
          {friends.friendCount > 0 ? `${friends.friendCount} bạn bè` : ""}
        </span>
      </div>

      <div
        className={`${
          where === "profile"
            ? "max900:justify-center"
            : "max1260:justify-center"
        } p-2 mt-2 h-9 box-content flex `}
      >
        {friends.friendCount > 0 &&
          friendsSlice.map((friend) => {
            return (
              <div className="-ml-2 cursor-pointer" key={friend._id}>
                <LazyLoadImage
                  src={friend.avatarUrl}
                  className="border border-divider dark:border-dividerDark rounded-full"
                  width={32}
                  height={32}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShortInfo;
