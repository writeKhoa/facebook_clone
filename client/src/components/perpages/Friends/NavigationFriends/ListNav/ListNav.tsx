import { BackIcon } from "@/components/commons/Icons";
import { Link } from "react-router-dom";
import { SearchIcon } from "@/components/commons";

const ListNav = () => {
  return (
    <div>
      <div className="flex mt-5 mx-2 mb-3">
        <div className="mr-3">
          <Link to={"/friends"}>
            <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
              <BackIcon />
            </div>
          </Link>
        </div>
        <div className="-my-2">
          <div className="my-2">
            <div className="-my-[6px]">
              <div className="my-[6px]">
                <span className="text-1316 font-normal text-secondaryText hover:underline hover:cursor-pointer">
                  Bạn bè
                </span>
              </div>
            </div>
            <div className="-my-2">
              <div className="my-2">
                <h1 className="text-2428 font-bold text-primaryText dark:text-primaryTextDark">
                  Tất cả bạn bè
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-5 pb-5 border-b border-divider dark:border-dividerDark">
        <div className="flex">
          <span className="flex items-center pl-[10px] rounded-l-full bg-black/10 dark:bg-white/10 text-secondaryIcon dark:text-secondaryIcon">
            <SearchIcon />
          </span>
          <input
            type="text"
            className="w-full h-9 rounded-r-full pb-[9px] px-[6px] pt-[7px] bg-black/10 dark:bg-white/10 accent-primaryText dark:accent-primaryTextDark text-primaryText dark:text-primaryTextDark"
            placeholder="Tìm kiếm bạn bè"
          />
        </div>
      </div>
    </div>
  );
};

export default ListNav;
