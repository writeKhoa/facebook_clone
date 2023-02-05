import { DownIcon, UpIcon } from "@/components/commons/Icons";
import { routesHomeNavLeftFull, routesHomeNavLeftPart } from "@/configs";
import { useAuth } from "@/hooks";
import { useState } from "react";
import { ItemFunc, ItemNavigation, ItemUser } from "./ItemNavigation";

const HomeNavigation = () => {
  const { user } = useAuth();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="h-notHeader py-4">
      <div className="ml-2">
        {user && (
          <ItemUser
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
            <li key={index} className="w-full">
              <div className="pl-2">
                <ItemNavigation src={imgSrc} title={title} path={path} />
              </div>
            </li>
          );
        })}
      </ul>
      {isHidden ? null : (
        <ul className="flex flex-col duration-200 transition-all">
          {routesHomeNavLeftFull.map((route, index) => {
            const { path, imgSrc, title } = route;
            return (
              <li key={index}>
                <div className="pl-2">
                  <ItemNavigation src={imgSrc} title={title} path={path} />
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="pl-2">
        {isHidden ? (
          <ItemFunc
            Icon={DownIcon}
            title="Xem thêm"
            handleHidden={() => setIsHidden(false)}
          />
        ) : (
          <ItemFunc
            Icon={UpIcon}
            title="Ẩn bớt"
            handleHidden={() => setIsHidden(true)}
          />
        )}
      </div>
    </div>
  );
};

export default HomeNavigation;
