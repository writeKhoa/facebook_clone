import { IsFriendIcon } from "@/components/commons";
import { LoadingCircelIcon } from "@/components/commons/Icons/Common.Icon";
import { FC } from "react";
interface Props {
  isLoading: boolean;
}

const RequestIsFriend: FC<Props> = ({ isLoading }) => {
  return (
    <div className="h-full px-3 py-1.5 bg-normalBtn dark:bg-normalBtnDark rounded-md cursor-pointer">
      <div className="flex items-center -mx-0.5">
        {isLoading ? (
          <div className="mx-1 animate-spin text-primaryIcon dark:text-primaryIconDark">
            <LoadingCircelIcon />
          </div>
        ) : (
          <div className="mx-1">
            <IsFriendIcon />
          </div>
        )}
        <div className="mx-0.5 flex items-center">
          <span className="mt-0.5 text-1418 font-semibold text-primaryText dark:text-primaryTextDark">
            Bạn bè
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequestIsFriend;
