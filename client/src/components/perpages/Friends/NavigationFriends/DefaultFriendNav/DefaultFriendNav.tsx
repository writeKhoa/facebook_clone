import { SettingIcon } from "@/components/commons/Icons";
import { routesFriendsNav } from "@/configs";
import { useLocation } from "react-router-dom";
import ItemNavFriend from "./ItemNavFriend";

const DefaultFriendNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed top-14 left-0 w-[360px] h-notHeader border-r-0  dark:border-r border-divider dark:border-dividerDark bg-surface dark:bg-surfaceDark">
      <div>
        <div className="mt-5 mx-4 mb-3">
          <div className="flex items-center justify-between w-full h-4">
            <div className="-my-2">
              <div className="my-2">
                <h1 className="text-2428 font-bold text-primaryText dark:text-primaryTextDark">
                  Bạn bè
                </h1>
              </div>
            </div>

            <div className="-my-2">
              <div className="my-2">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-black/10 dark:bg-white/10 cursor-pointer">
                  <SettingIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[1px]"></div>
          <div className="mt-2">
            {routesFriendsNav.map((route, index) => {
              const { type, title, path, Icon } = route;
              // @ts-ignore: Unreachable code error
              const isActive = path.split("/")[1] === pathname.split("/")[2];
              return (
                <ItemNavFriend
                  key={index}
                  // @ts-ignore: Unreachable code error
                  Icon={Icon}
                  type={type}
                  title={title}
                  path={`/friends${path}`}
                  isActive={isActive}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultFriendNav;
