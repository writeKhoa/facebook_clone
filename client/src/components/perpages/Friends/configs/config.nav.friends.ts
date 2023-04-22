import {
  DefaultFriendNav,
  FriendListNav,
  ListNav,
  SuggestNav,
  RequestNav,
} from "../NavigationFriends/sub";

const routeNavFriends = [
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

export default routeNavFriends;
