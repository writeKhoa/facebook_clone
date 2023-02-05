import DefaultFriendNav from "./DefaultFriendNav";
import FriendListNav from "./FriendListNav";
import ListNav from "./ListNav";
import SuggestNav from "./SuggestNav";
import RequestNav from "./RequestNav";

const activeComponentNavFriends = [
  {
    path: "/*",
    Component: DefaultFriendNav,
  },
  {
    path: "/requests/*",
    Component: RequestNav,
  },
  {
    path: "/suggest/*",
    Component: SuggestNav,
  },
  {
    path: "/list/*",
    Component: ListNav,
  },
  {
    path: "/custom/*",
    Component: FriendListNav,
  },
];

export default activeComponentNavFriends;
