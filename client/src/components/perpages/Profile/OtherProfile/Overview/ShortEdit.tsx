import React from "react";
import { AddFriendIcon, FindIcon } from "@/components/commons/Icons";

const ShortEdit = () => {
  return (
    <div className="flex mt-2 -mx-1">
      <div className="mx-1 mt-2">
        <div className="px-3 py-[6px] bg-primaryBtnBg rounded-md cursor-pointer">
          <div className="flex items-center -mx-[3px]">
            <div className="mx-[3px]">
              <AddFriendIcon />
            </div>
            <div className="mx-[3px]">
              <span className="text-1418 font-semibold text-white">
                Thêm bạn bè
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-1 mt-2">
        <div className="px-3 py-[6px] bg-normalBtn dark:bg-normalBtnDark rounded-md cursor-pointer">
          <div className="flex items-center -mx-[3px]">
            <div className="mx-[3px]">
              <FindIcon />
            </div>
            <div className="mx-[3px]">
              <span className="text-1516 font-semibold text-primaryText dark:text-primaryTextDark">
                Tìm kiếm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortEdit;
