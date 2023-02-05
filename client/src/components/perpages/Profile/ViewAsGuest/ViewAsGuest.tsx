import { FC } from "react";
import Overview from "./Overview";
import { ProfileProps } from "@/models";

interface Props {
  user: ProfileProps;
}

const ViewAsGuest: FC<Props> = ({ user }) => {
  return <Overview user={user} />;
};

export default ViewAsGuest;
