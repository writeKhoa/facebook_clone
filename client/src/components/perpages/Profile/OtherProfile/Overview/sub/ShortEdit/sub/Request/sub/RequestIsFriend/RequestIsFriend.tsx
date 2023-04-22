import { IsFriendIcon, UnFriendIcon } from "@/components/commons";
import { LoadingCircelIcon } from "@/components/commons/Icons/Common.Icon";
import { useClickOutside } from "@/hooks";
import { FC, useRef, useState } from "react";

interface Props {
  isLoading: boolean;
  onUnFriend: () => Promise<void>;
}

const RequestIsFriend: FC<Props> = ({ isLoading, onUnFriend }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen((pre) => !pre);

  const optionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useClickOutside([optionRef, buttonRef], () => setIsOpen(false), []);
  return (
    <div
      className="relative h-full px-3 py-1.5 bg-normalBtn dark:bg-normalBtnDark rounded-md cursor-pointer"
      onClick={handleOpen}
      ref={buttonRef}
    >
      <div className="flex items-center -mx-0.5">
        {isLoading ? (
          <div className="mx-1 animate-spin text-primaryIcon dark:text-primaryIconDark">
            <span>
              <LoadingCircelIcon />
            </span>
          </div>
        ) : (
          <div className="mx-1">
            <span>
              <IsFriendIcon />
            </span>
          </div>
        )}
        <div className="mx-0.5 flex items-center">
          <span className="mt-0.5 text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
            Bạn bè
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute top-[110%] left-0 w-80 py-2 rounded-lg my-boxshadow bg-surface dark:bg-surfaceDark z-10"
          ref={optionRef}
        >
          <div className="rounded-md mx-2 p-2 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
            <div className="flex" onClick={onUnFriend}>
              <div className="mr-3">
                <span>
                  <UnFriendIcon />
                </span>
              </div>
              <div>
                <span className="text-1520 text-primaryText dark:text-primaryTextDark font-semibold">
                  Hủy kết bạn
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestIsFriend;
