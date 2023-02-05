import { PageProps } from "@/models";
import {
  NavigationFriends,
  OutletFriends,
} from "@/components/perpages/Friends";
import { useEffect } from "react";

const Friends: PageProps = () => {
  useEffect(() => {
    document.title = "Bạn bè | Facebook";
  }, []);
  return (
    <div className="flex w-full min-h-screen bg-space dark:bg-spaceDark overflow-x-hidden">
      <NavigationFriends />
      <OutletFriends />
    </div>
  );
};

export default Friends;
