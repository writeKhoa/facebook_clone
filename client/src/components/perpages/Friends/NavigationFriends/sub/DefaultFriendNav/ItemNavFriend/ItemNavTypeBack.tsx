import { FC } from "react";
import { BackIcon } from "@/components/commons/Icons";

interface Props {
  title: string;
}

const ItemNavTypeBack: FC<Props> = ({ title }) => {
  return (
    <div>
      <div>
        <div>
          <BackIcon />
        </div>

        <div>{title}</div>
      </div>
    </div>
  );
};
export default ItemNavTypeBack;
