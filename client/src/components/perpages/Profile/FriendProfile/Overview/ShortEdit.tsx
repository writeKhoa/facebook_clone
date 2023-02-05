import { IsFriendIcon, MessageIcon } from "@/components/commons";

const ShortEdit = () => {
  return (
    <div className="flex mt-2 -mx-1">
      <div className="mx-1 mt-2">
        <div className="px-3 py-[6px] bg-normalBtn dark:bg-normalBtnDark rounded-md cursor-pointer">
          <div className="flex items-center -mx-[3px]">
            <div className="mx-[3px]">
              <IsFriendIcon />
            </div>
            <div className="mx-[3px]">
              <span className="text-1418 font-semibold text-primaryText dark:text-primaryTextDark">
                Bạn bè
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-1 mt-2">
        <div className="px-3 py-[6px] bg-primaryBtnBg rounded-md cursor-pointer">
          <div className="flex items-center -mx-[3px]">
            <div className="mx-[3px] ">
              <MessageIcon />
            </div>
            <div className="mx-[3px]">
              <span className="text-1418 font-semibold text-white">
                Nhắn tin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortEdit;
