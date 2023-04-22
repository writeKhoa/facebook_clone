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
      className="px-3 py-1.5 h-9 bg-normalBtn dark:bg-normalBtnDark rounded-md cursor-pointer"
      onClick={onCancel}
    >
      <div className="flex items-center justify-center -mx-1 h-full">
        {isLoading ? (
          <div className="mx-1 animate-spin text-primaryIcon dark:text-primaryIconDark">
            <span>
              <LoadingCircelIcon />
            </span>
          </div>
        ) : (
          <div className="mx-1">
            <span>
              <CancelAddFriendIcon />
            </span>
          </div>
        )}
        <div className="mx-0.5 flex items-center">
          <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
            Hủy lời mời
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequestCencle;
