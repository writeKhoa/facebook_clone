import { FC } from "react";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/commons";

interface Props {
  src: any;
  title: string;
  path: string;
}
const ItemNavigation: FC<Props> = ({ src, title, path }) => {
  return (
    <Link to={path}>
      <div className="flex items-center w-full min-h-[44px] px-2 rounded-md text-primaryText dark:text-primaryTextDark hover:bg-black/10 dark:hover:bg-white/10">
        <div className="w-9 h-9 my-1 -ml-1 mr-[6px]">
          <LazyImage src={src} alt="" className="w-9 h-9" />
        </div>

        <div className="grow">
          <div className="py-3">
            <div className="-my-[5px]">
              <span className="text-1516 font-medium">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemNavigation;
