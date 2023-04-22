import { DownIcon, UpIcon } from "@/components/commons/Icons";
import { routesHomeNavLeftFull, routesHomeNavLeftPart } from "@/configs";
import { useAuth } from "@/hooks";
import { useState } from "react";
import { UserItem, NavItem, FuncItem } from "./sub";

const HomeNavigation = () => {
  const { user } = useAuth();
  const [isHidden, setIsHidden] = useState(true);
  const [isFirstOpen, setIsFirstOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setIsHidden(false);
    if (isFirstOpen) {
      setTimeout(() => {
        setIsFirstOpen(false);
      }, 350);
    };
  }
  const handleClose = () => setIsHidden(true);
  return (
    <div className="h-notHeader py-4 transition-all duration-75">
      <div className="px-2">
        {user && (
          <UserItem
            path={`/${user?._id}`}
            src={user?.avatarUrl}
            title={`${user?.fullName}`}
          />
        )}
      </div>
      <ul className="flex flex-col w-full">
        {routesHomeNavLeftPart.map((route, index) => {
          const { path, imgSrc, title } = route;
          return (
            <li key={index} className="w-full px-2">
              <NavItem src={imgSrc} title={title} path={path} />
            </li>
          );
        })}
      </ul>
      {isHidden || isFirstOpen ? null : (
        <ul className="flex flex-col duration-200 transition-all">
          {routesHomeNavLeftFull.map((route, index) => {
            const { path, imgSrc, title } = route;
            return (
              <li key={index} className="px-2">
                <NavItem src={imgSrc} title={title} path={path} />
              </li>
            );
          })}
        </ul>
      )}

      <div className="px-2">
        {isHidden || isFirstOpen ? (
          <FuncItem
            Icon={DownIcon}
            title="Xem thêm"
            isLoading={isFirstOpen && !isHidden}
            handleHidden={handleOpen}
          />
        ) : (
          <FuncItem
            Icon={UpIcon}
            title="Ẩn bớt"
            isLoading={false}
            handleHidden={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default HomeNavigation;
