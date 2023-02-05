import { FC } from "react";
import { LazyImage } from "@/components/commons";

interface Props {
  fullName: string;
  avatarUrl: string;
}
export const ItemFriend: FC<Props> = ({ fullName, avatarUrl }) => {
  return (
    <div className="px-2">
      <div className="flex px-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
        <div className="my-1 mr-[6px] w-9 h-9">
          <LazyImage src={avatarUrl} alt="" className="rounded-full w-9 h-9" />
        </div>

        <div className="grow flex py-3 items-center">
          <span className="text-1520 font-medium text-primaryText dark:text-primaryTextDark">{`${fullName}`}</span>
        </div>
      </div>
    </div>
  );
};
