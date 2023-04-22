import OutletFriends from "./OutletFriends";
import NavigationFriends from "./NavigationFriends/NavigationFriends";
import { StateFriendProvider } from "@/store";

const PageFriends = () => {
  return (
    <StateFriendProvider>
      <div className="flex w-full bg-space dark:bg-spaceDark">
        <div className="shrink-0 w-[360px]">
          <NavigationFriends />
        </div>
        <div className="grow w-full h-notHeader">
          <OutletFriends />
        </div>
      </div>
    </StateFriendProvider>
  );
};

export default PageFriends;
