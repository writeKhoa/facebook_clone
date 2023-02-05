import { ProfileProps } from "@/models";
import { FC } from "react";
import Overview from "./Overview";

interface Props {
  user: ProfileProps;
}

const OtherProfile: FC<Props> = ({ user }) => {
  return <Overview user={user} />;
};

export default OtherProfile;
