import { routesProfile } from "@/configs";
import { ItemNav } from "./ItemNav";
import { useLocation } from "react-router-dom";

import { FC } from "react";

interface Props {
  id?: string;
}

export const Nav: FC<Props> = ({ id }) => {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center h-[60px]">
      {routesProfile.map((route, index) => {
        const { title, path } = route;
        const isActive = pathname.split("/")[2] === path.split("/")[1];
        return (
          <ItemNav
            key={index}
            title={title}
            path={`/${id}${path}`}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};
