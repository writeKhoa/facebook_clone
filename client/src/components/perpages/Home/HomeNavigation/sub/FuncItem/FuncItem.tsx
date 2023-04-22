import { FC } from "react";
import { LoadingCircelIcon } from "@/components/commons/Icons/Common.Icon";

interface Props {
  Icon: () => JSX.Element;
  isLoading: boolean;
  title: string;
  handleHidden: () => void;
}
const FuncItem: FC<Props> = ({ Icon, title, isLoading, handleHidden }) => {
  return (
    <div
      className="flex items-center w-full min-h-[44px] px-2 rounded-md text-primaryText dark:text-primaryTextDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
      onClick={handleHidden}
    >
      {isLoading ? (
        <div className="flex justify-center items-center w-9 h-9 my-1 -ml-1 mr-[6px] rounded-full bg-black/10 dark:bg-white/10 animate-spin">
          <LoadingCircelIcon />
        </div>
      ) : (
        <div className="flex justify-center items-center w-9 h-9 my-1 -ml-1 mr-[6px] rounded-full bg-black/10 dark:bg-white/10">
          <Icon />
        </div>
      )}

      <div className="grow">
        <div className="py-3">
          <div className="-my-[5px]">
            <span className="text-1516 font-medium">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FuncItem;
