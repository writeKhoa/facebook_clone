import { FC } from "react";
import { CameraBackgroundProfileIcon } from "@/components/commons/Icons";

interface Props {
  backgroundUrl: string;
}

const Background: FC<Props> = ({ backgroundUrl }) => {
  if (backgroundUrl === "") {
    return (
      <div className="relative w-full pt-[37%] bg-space dark:bg-spaceDark rounded-b-xl">
        <div className="absolute bottom-0 right-0 h-[68px]">
          <div className="h-full px-5">
            <div className="-m-[6px] p-3">
              <div className="ml-auto p-[6px] h-[52px] flex items-center">
                <div className="flex items-center h-9 rounded-md px-3 -mx-[3px] bg-white cursor-pointer">
                  <span className="mx-[3px]">
                    <CameraBackgroundProfileIcon />
                  </span>
                  <span className="mx-[3px] text-1520 font-semibold text-black max900:hidden">
                    Thêm ảnh bìa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Background</div>;
};

export default Background;
