import { ProfileProps } from "@/models";
import { FC } from "react";
import FriendProfile from "./FriendProfile";
import NotFound from "./NotFound";
import OtherProfile from "./OtherProfile";
import OutletProfile from "./OutletProfile";
import SelfProfile from "./SelfProfile";
import ViewAsGuest from "./ViewAsGuest";

interface Props {
  typeProfile: string;
  user: ProfileProps;
}

const Profile: FC<Props> = ({ typeProfile, user }) => {
  switch (typeProfile) {
    case "yourself":
      return (
        <>
          <SelfProfile user={user} />
          <OutletProfile />
        </>
      );
    case "other":
      return (
        <>
          <OtherProfile user={user} />
          <OutletProfile />
        </>
      );
    case "friend":
      return (
        <>
          <FriendProfile user={user} />
          <OutletProfile />
        </>
      );
    case "notlogin":
      return (
        <>
          <ViewAsGuest user={user} />
          <OutletProfile />
        </>
      );
    default:
      return <NotFound />;
  }
};

export default Profile;
