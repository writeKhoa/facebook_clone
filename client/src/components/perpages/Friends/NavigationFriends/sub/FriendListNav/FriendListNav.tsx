import { BackIcon } from "@/components/commons/Icons";
import { Link } from "react-router-dom";

const FriendListNav = () => {
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
                  Danh sách tùy chỉnh
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4">
        <h2 className="text-primaryText dark:text-primaryTextDark font-semibold text-1618">
          Not develop
        </h2>
      </div>
    </div>
  );
};

export default FriendListNav;
