import { CancelAddFriendIcon } from "@/components/commons";
import { LoadingCircelIcon } from "@/components/commons/Icons/Common.Icon";
import { FC } from "react";

interface Props {
  isLoading: boolean;
  onCancel: () => Promise<void>;
}

const RequestCencle: FC<Props> = ({ isLoading, onCancel }) => {
  return (
    <div
      className="px-3 py-[6px] bg-normalBtn dark:bg-normalBtnDark rounded-md cursor-pointer"
      onClick={onCancel}
    >
      <div className="flex items-center -mx-[3px]">
        {isLoading ? (
          <div className="mx-1 animate-spin text-primaryIcon dark:text-primaryIconDark">
            <LoadingCircelIcon />
          </div>
        ) : (
          <div className="mx-1">
            <CancelAddFriendIcon />
          </div>
        )}
        <div className="mx-0.5 flex items-center">
          <span className="text-1418 font-semibold text-primaryText dark:text-primaryTextDark">
            Hủy lời mời
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequestCencle;
