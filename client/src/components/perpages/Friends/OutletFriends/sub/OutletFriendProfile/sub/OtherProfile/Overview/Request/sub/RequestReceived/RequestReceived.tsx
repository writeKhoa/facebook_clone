import { ResponseRequestMakeFriendIcon } from "@/components/commons";
import { LoadingCircelIcon } from "@/components/commons/Icons/Common.Icon";
import { FC, useState } from "react";

interface Props {
  isLoading: boolean;
  onConfirm: () => void;
  onDelete: () => void;
}

const RequestReceived: FC<Props> = ({ isLoading, onConfirm, onDelete }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen((pre) => !pre);

  const handleConfirm = () => onConfirm();

  const handleDelete = () => onDelete();

  return (
    <div
      className="relative h-full px-3 py-1.5 bg-primary rounded-md cursor-pointer"
      onClick={handleOpen}
    >
      <div className="flex items-center -mx-1">
        {isLoading ? (
          <div className="mx-1 animate-spin text-primaryIcon dark:text-primaryIconDark">
            <LoadingCircelIcon />
          </div>
        ) : (
          <div className="mx-1">
            <ResponseRequestMakeFriendIcon />
          </div>
        )}
        <div className="mt-0.5 h-full mx-0.5 flex items-center">
          <span className="text-1418 font-semibold text-primaryText dark:text-primaryTextDark">
            Phản hồi
          </span>
        </div>
      </div>

      <div className="absolute top-[110%] -left-14 w-[340px] bg-surface dark:bg-surfaceDark rounded-md z-10 shadow-slate-900 my-boxshadow">
        {isOpen ? (
          <div className="py-2 ">
            <div
              className="text-1214 mx-2 py-3 px-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md"
              onClick={handleConfirm}
            >
              <span className="text-primaryText dark:text-primaryTextDark font-semibold text-1418">
                Xác nhận
              </span>
            </div>

            <div
              className="text-1214 mx-2 py-3 px-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md"
              onClick={handleDelete}
            >
              <span className="text-primaryText dark:text-primaryTextDark font-semibold text-1418">
                Xóa lời mời
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RequestReceived;
