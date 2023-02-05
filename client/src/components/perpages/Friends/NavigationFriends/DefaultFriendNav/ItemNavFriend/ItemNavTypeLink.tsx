import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  Icon: () => JSX.Element;
  path: string;
  title: string;
  isActive: boolean;
}

const ItemNavTypeLink: FC<Props> = ({ Icon, path, title, isActive }) => {
  return (
    <div className="px-2">
      <NavLink to={path}>
        <div
          className={`flex items-center px-2 hover:cursor-pointer rounded-md ${
            isActive
              ? "bg-black/10 dark:bg-white/10"
              : "hover:bg-black/10 dark:hover:bg-white/10"
          }`}
        >
          <div
            className={`flex items-center justify-center w-9 h-9 my-2 mr-3 rounded-full ${
              isActive ? "bg-primary" : "bg-white/10"
            }`}
          >
            <span className="flex items-center justify-center">
              <Icon />
            </span>
          </div>

          <span className="text-1720 text-primaryText dark:text-primaryTextDark font-medium">
            {title}
          </span>
        </div>
      </NavLink>
    </div>
  );
};
export default ItemNavTypeLink;
