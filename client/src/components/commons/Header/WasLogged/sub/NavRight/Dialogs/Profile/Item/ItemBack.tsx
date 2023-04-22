import { FC } from "react";
import { BackIcon } from "@/components/commons/Icons";

interface Props {
  title: string;
  funcBack: () => void;
}

export const ItemBack: FC<Props> = ({ title, funcBack }) => {
  return (
    <div className="flex items-center px-4 pt-4 pb-2">
      <div
        className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full cursor-pointer"
        onClick={funcBack}
      >
        <div className="w-5 h-5">
          <BackIcon />
        </div>
      </div>

      <div className="pl-[10px]">
        <h2 className="text-primaryText dark:text-primaryTextDark font-bold text-2428">
          <span>{title}</span>
        </h2>
      </div>
    </div>
  );
};
