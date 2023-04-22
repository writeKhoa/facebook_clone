import { ProfileProps } from "@/models";
import { FC } from "react";
import Outlet from "./Outlet";
import Overview from "./Overview";

interface Props {
  user: ProfileProps;
}

const SelfProfile: FC<Props> = ({ user }) => {
  return (
    <>
      <Overview user={user} />
      <Outlet profile={user} />
    </>
  );
};

export default SelfProfile;
