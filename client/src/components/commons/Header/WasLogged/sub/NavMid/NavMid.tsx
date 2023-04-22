import { routesNavMid } from "@/configs";
import ItemNavMid from "./ItemNavMid";
import { Tooltip } from "@/components/commons";

const NavMid = () => {
  return (
    <ul className="flex justify-center grow -ml-2 w-full px-[110px]">
      {routesNavMid.map((routeNav, index) => {
        const { title } = routeNav;
        return (
          <li
            key={index}
            className="grow ml-2 max-w-[111.6px] max1075:w-itemNavMid min-w-[50px]"
          >
            <Tooltip tooltip={title}>
              <ItemNavMid item={routeNav} />
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMid;
