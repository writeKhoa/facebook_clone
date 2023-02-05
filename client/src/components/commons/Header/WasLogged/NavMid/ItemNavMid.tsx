import { FC } from "react";
import { ItemNavMidModel } from "@/models";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  item: ItemNavMidModel;
}

const ItemNavMid: FC<Props> = ({ item }) => {
  const { pathname } = useLocation();
  const { Icon, IconActive, path } = item;
  const isActive = pathname.split("/")[1] === path.split("/")[1];
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "h-full w-full text-primaryBtnBg"
          : "h-full w-full text-secondaryIcon dark:text-secondaryIconDark"
      }
    >
      <div className="relative w-full h-full hover:cursor-pointer group">
        <div
          className={`absolute top-1 left-0 right-0 flex h-12 items-center justify-center  ${
            isActive ? "" : "hover:bg-white/10 rounded-lg"
          }`}
        >
          {isActive ? <IconActive /> : <Icon />}
        </div>

        <div
          className={`${
            isActive ? "absolute top-[53px] bg-primary h-[3px] w-full" : ""
          }`}
        ></div>
      </div>
    </NavLink>
  );
};

export default ItemNavMid;
