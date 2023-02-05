import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  path: string;
  isActive: boolean;
}

export const ItemNav: FC<Props> = ({ title, path, isActive }) => {
  return (
    <NavLink to={path}>
      <div className="relative h-[60px]">
        <div className="h-[3px]"></div>
        <div
          className={`flex items-center w-full h-[54px] px-4 rounded-md ${
            isActive ? "" : "hover:bg-black/10 dark:hover:bg-white/10"
          }`}
        >
          <span className="font-semibold text-1520 text-secondaryText dark:text-secondaryTextDark">
            {title}
          </span>
        </div>

        <div className={isActive ? "h-[3px] bg-primary" : ""}></div>
      </div>
    </NavLink>
  );
};
