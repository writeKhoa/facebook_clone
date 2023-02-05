import { FC } from "react";
import { Nav } from "./Nav";

interface Props {
  id?: string;
}

const NavProfile: FC<Props> = ({ id }) => {
  return (
    <div className="h-full">
      <Nav id={id} />
    </div>
  );
};

export default NavProfile;
