import { AddFriendIcon } from "@/components/commons";
import { LoadingCircelIcon } from "@/components/commons/Icons/Common.Icon";
import { FC } from "react";

interface Props {
  isLoading: boolean;
  onAdd: () => Promise<void>;
}

const RequestAddFriend: FC<Props> = ({ isLoading, onAdd }) => {
  return (
    <div
      className="px-3 py-1.5 h-9 bg-primaryBtnBg rounded-md cursor-pointer"
      onClick={onAdd}
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
              <AddFriendIcon />
            </span>
          </div>
        )}
        <div className="mx-0.5">
          <span className="text-1420 font-semibold text-white">
            Thêm bạn bè
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequestAddFriend;
