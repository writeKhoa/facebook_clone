import { FC } from "react";
interface Props {
  Icon: any;
  title: string;
  handleHidden: () => void;
}
const ItemFunc: FC<Props> = ({ Icon, title, handleHidden }) => {
  return (
    <div
      className="flex items-center w-full min-h-[44px] px-2 rounded-md text-primaryText dark:text-primaryTextDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
      onClick={handleHidden}
    >
      <div className="flex justify-center items-center w-9 h-9 my-1 -ml-1 mr-[6px] rounded-full bg-black/10 dark:bg-white/10">
        <Icon />
      </div>

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
export default ItemFunc;
