import { ForwardIcon } from "@/components/commons/Icons";
import { Dispatch, FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  Icon: () => JSX.Element;
  path: string;
  title: string;
}

const ItemNavTypeNav: FC<Props> = ({ Icon, path, title }) => {
  return (
    <div className="px-2">
      <NavLink to={path}>
        <div className="px-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md cursor-pointer">
          <div className="flex items-center">
            <div className="flex items-center justify-center my-2 pr-3">
              <span className="flex justify-center items-center w-9 h-9 rounded-full bg-white/10">
                <Icon />
              </span>
            </div>

            <span className="text-1720 text-primaryText dark:text-primaryTextDark font-medium">
              {title}
            </span>

            <div className="ml-auto">
              <span>
                <ForwardIcon />
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
export default ItemNavTypeNav;
