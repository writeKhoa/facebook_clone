import { MainOutlet, OutletFriendProfile } from "../OutletFriends/sub";

const routeOutletFriends = [
  { Component: MainOutlet, path: "/" },
  {
    Component: OutletFriendProfile,
    path: "/list/*",
  },
  {
    Component: OutletFriendProfile,
    path: "/requests/*",
  },
  {
    Component: OutletFriendProfile,
    path: "/suggest/*",
  },
];

export default routeOutletFriends;
