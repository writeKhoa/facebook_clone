import React, { FC, ReactNode, SyntheticEvent } from "react";

interface Props {
  onHandle: (e: SyntheticEvent) => void;
  Icon: () => JSX.Element;
  title: string;
}

const OptionItem: FC<Props> = ({ onHandle, Icon, title }) => {
  return (
    <div
      className="flex mx-2 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-md cursor-pointer"
      onClick={onHandle}
    >
      <div className="mr-3">
        <Icon />
      </div>
      <div>
        <span className="text-1520 text-primaryText dark:text-primaryTextDark font-medium">
          {title}
        </span>
      </div>
    </div>
  );
};

export default OptionItem;
