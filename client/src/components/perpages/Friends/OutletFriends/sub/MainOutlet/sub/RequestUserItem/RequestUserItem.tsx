import { ShortProfileItem } from "@/models";
import React, { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface Props {
  props: ShortProfileItem;
  onConfirm: () => void;
  onDeny: () => void;
}

const RequestUserItem: FC<Props> = ({ props, onConfirm, onDeny }) => {
  const { _id, fullName, mediumAvatarUrl } = props;
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isAccept, setIsAccept] = useState<boolean>(false);

  const handleDeny = () => {
    try {
      setIsDelete(true)
      onDeny()
    } catch (error) {
      console.log({ error });
    }
  }

  const handleConfirm = () => {
    try {
      setIsAccept(true)
      onConfirm()
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div className="m-1 flex-1" style={{ maxWidth: 250, minWidth: 200 }}>
      <div className="flex flex-col border border-divider dark:border-dividerDark rounded-lg bg-surface dark:bg-surfaceDark overflow-hidden">
        <div className="relative w-full pt-[100%]">
          <Link to={`/friends/requests/${_id}`}>
            <LazyLoadImage
              className="absolute top-0 left-0"
              src={mediumAvatarUrl}
              width={250}
              height={250}
            />
          </Link>
        </div>
        <div>
          <div className="p-3">
            <span className="text-1720 my-0.5 text-primaryText dark:text-primaryTextDark font-semibold">
              {fullName}
            </span>

            <div className="mt-2">
              {isDelete || isAccept ? (
                <div className="h-9"></div>
              ) : (
                <div className="h-9 rounded-md bg-primary text-primaryText dark:text-primaryTextDark font-semibold text-1418 cursor-pointer"
                  onClick={handleConfirm}
                >
                  <div className="flex justify-center items-center h-full px-3">
                    <span className="text-primaryText dark:text-primaryTextDark text-1418 font-semibold">
                      Xác nhận
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`h-9 mt-1 rounded-md bg-black/20 dark:bg-white/20 text-primaryText dark:text-primaryTextDark font-semibold text-1418 ${isDelete || isAccept ? "cursor-not-allowed" : "cursor-pointer"
                  }`}

                onClick={handleDeny}
              >
                <div className="flex items-center justify-center h-full px-3">
                  {isDelete || isAccept ? (
                    <span className="text-black/20 dark:text-white/20 text-1520 font-semibold limit-1">
                      {isDelete ? "Đã xóa yêu cầu" : "Đã chấp nhận lời mời kết bạn"}
                    </span>
                  ) : (
                    <span className="text-primaryText dark:text-primaryTextDark text-1418 font-semibold">
                      Xóa
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestUserItem;
