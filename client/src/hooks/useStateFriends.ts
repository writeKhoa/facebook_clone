import { FriendStateContext, StateFriendsContext } from "@/store";
import { useContext } from "react";

export const useStateFriends = () => {
  return useContext(FriendStateContext) as StateFriendsContext;
};
