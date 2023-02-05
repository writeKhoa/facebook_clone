import React, { FC } from "react";
import { ItemNav } from "./ItemNav";
import { ItemBack } from "./ItemBack";
import { ItemLink } from "./ItemLink";
import { ItemFunction } from "./ItemFunction";
import { ItemAdjust } from "./ItemAdjust";

interface Props {
  Icon: () => JSX.Element;
  title: string;
  type: "link" | "nav" | "function" | "back" | "adjust";
  path?: string;
  subTitle?: string;
  func?: "logout";
  adjust?: "theme" | string;
  funcForward: () => void;
  funcBack: () => void;
}

const Item: FC<Props> = ({
  funcForward,
  funcBack,
  Icon,
  title,
  subTitle,
  path,
  type,
  func,
  adjust,
}) => {
  switch (type) {
    case "nav":
      return (
        <ItemNav Icon={Icon} title={title} funcForward={funcForward} />
      );
    case "back":
      return <ItemBack title={title} funcBack={funcBack} />;
    case "function":
      return <ItemFunction Icon={Icon} title={title} func={func} />;
    case "link":
      return <ItemLink Icon={Icon} title={title} path={path} />;
    case "adjust":
      return <ItemAdjust Icon={Icon} title={title} subTitle={subTitle} adjust={adjust} />;
    default:
      return null;
  }
};
export default Item;
