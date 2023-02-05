import { FC, useState } from "react";
import { ItemProfile } from "@/models";
import Item from "./Item";
import { routesHeaderNavRight } from "@/configs";

interface Props {
  handleShow: () => void;
  handleHide: () => void;
}

export const ListOption: FC<Props> = ({ handleShow, handleHide }) => {
  const [listOption, setListOption] =
    useState<ItemProfile[][]>(routesHeaderNavRight);

  const id = () => {
    return crypto.randomUUID();
  };

  let lastList = listOption.length - 1;
  return (
    <div className="pt-1 pb-2">
      <div className="-mt-1 -mb-4">
        {listOption[lastList].map((item) => {
          const { Icon, title, type, func, adjust, subTitle, children } = item;

          const handleForward = () => {
            if (children !== undefined) {
              setListOption([...listOption, children]);
            }
            handleHide();
          };
          const handleBack = () => {
            setListOption(listOption.slice(0, -1));
            handleShow();
          };
          return (
            <Item
              key={id()}
              type={type}
              Icon={Icon}
              title={title}
              func={func}
              adjust={adjust}
              subTitle={subTitle}
              funcForward={handleForward}
              funcBack={handleBack}
            />
          );
        })}
      </div>
    </div>
  );
};
