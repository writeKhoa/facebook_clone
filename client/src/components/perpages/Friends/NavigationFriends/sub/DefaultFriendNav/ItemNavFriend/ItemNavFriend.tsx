import { FC } from "react";
import ItemNavTypeLink from "./ItemNavTypeLink";
import ItemNavTypeNav from "./ItemNavTypeNav";
import ItemNavTypeBack from "./ItemNavTypeBack";

interface Props {
  Icon: () => JSX.Element;
  title: string;
  path: string;
  type: "nav" | "link" | "back";
  isActive: boolean;
}

const ItemNavFriend: FC<Props> = ({ Icon, title, path, type, isActive }) => {
  switch (type) {
    case "nav":
      return <ItemNavTypeNav Icon={Icon} title={title} path={path} />;
    case "link":
      return (
        <ItemNavTypeLink
          Icon={Icon}
          title={title}
          path={path}
          isActive={isActive}
        />
      );
    case "back":
      return <ItemNavTypeBack title={title} />;
  }
};

export default ItemNavFriend;
