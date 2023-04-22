import { ProfileProps } from "@/models";
import { FC } from "react";
import Overview from "./Overview";
import { Outlet } from "@/components/commons/profile-commons/other-commons";

interface Props {
  profile: ProfileProps;
  mode: number;
}

const OtherProfile: FC<Props> = ({ profile, mode }) => {
  return (
    <>
      <Overview profile={profile} mode={mode} />
      <Outlet profile={profile} mode={mode} />
    </>
  );
};

export default OtherProfile;
