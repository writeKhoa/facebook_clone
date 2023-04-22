import { FC, useState } from "react";
import { UnSelectIcon, SelectIcon } from "@/components/commons/Icons";

interface Props {
  Icon: () => JSX.Element;
  title: string;
  subTitle?: string;
  adjust?: "theme" | string;
}

export const ItemAdjust: FC<Props> = ({ Icon, title, subTitle, adjust }) => {
  const currentTheme = localStorage.theme === "dark" ? true : false;
  const [isOn, setIsOn] = useState(currentTheme);

  const handleOn = () => {
    if (adjust === "theme") {
      setIsOn(true);
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  const handleOff = () => {
    if (adjust === "theme") {
      setIsOn(false);
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <div className="mx-2 mt-1">
      <div className="-m-[6px] py-3 px-2">
        <div className="flex">
          <div className="p-[6px] mt-1">
            <div className="flex items-center justify-center w-9 h-9 bg-black/10 dark:bg-white/30 rounded-full">
              <Icon />
            </div>
          </div>
          <div className="p-[6px]">
            <div className="my-[5px]">
              <span className="font-semibold text-1720 text-primaryText dark:text-primaryTextDark">
                {title}
              </span>
            </div>

            <div className="my-[5px]">
              <span className="font-normal text-1516 text-secondaryText dark:text-secondaryTextDark">
                {subTitle}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mr-4">
        <label className="block" onClick={handleOff}>
          <div className="ml-12 px-2 py-3 hover:bg-black/10 dark:hover:bg-white/10 rounded-md">
            <div className="-my-[6px] flex items-center hover:cursor-pointer">
              <div className="grow">
                <span className="text-1520 text-primaryText dark:text-primaryTextDark font-medium">
                  Tắt
                </span>
              </div>
              <div className="shrink-0">
                <div>
                  <input type="radio" checked={isOn} className="sr-only" />
                  <div className="w-8 h-8">
                    <div className="p-[6px] flex items-center justify-center">
                      {isOn ? <UnSelectIcon /> : <SelectIcon />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>

        <label className="block" onClick={handleOn}>
          <div className="ml-12 px-2 py-3 hover:bg-black/10 dark:hover:bg-white/10 rounded-md">
            <div className="-my-[6px] flex items-center">
              <div className="grow">
                <span className="text-1520 text-primaryText dark:text-primaryTextDark font-medium">
                  Bật
                </span>
              </div>
              <div className="shrink-0">
                <div>
                  <input type="radio" checked={isOn} className="sr-only" />
                  <div className="w-8 h-8">
                    <div className="p-[6px] flex items-center justify-center">
                      {isOn ? <SelectIcon /> : <UnSelectIcon />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
