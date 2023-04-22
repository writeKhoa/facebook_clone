import { FindIcon } from "@/components/commons/Icons";
import { FC } from "react";
import { Request } from "./sub";

interface Props {
  mode: number;
  id: string;
}

const ShortEdit: FC<Props> = ({ mode, id }) => {
  return (
    <div className="flex mt-2 -mx-1">
      <Request id={id} mode={mode} />

      <div className="mx-1 mt-2">
        <div className="px-3 py-[6px] bg-normalBtn dark:bg-normalBtnDark rounded-md cursor-pointer">
          <div className="flex items-center -mx-[3px]">
            <div className="mx-[3px]">
              <span className="text-primaryIcon dark:text-primaryIconDark">
                <FindIcon />
              </span>
            </div>
            <div className="mx-[3px]">
              <span className="text-1516 font-semibold text-primaryText dark:text-primaryTextDark">
                Tìm kiếm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortEdit;
