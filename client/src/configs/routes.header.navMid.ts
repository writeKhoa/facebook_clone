import { ItemNavMidModel } from "@/models";
import {
  HomeNavMid,
  HomeNavMidActive,
  FriendsNavMid,
  FriendsNavMidActive,
  WatchNavMid,
  WatchNavMidActive,
  GroupNavMid,
  GroupNavMidActive,
} from "@/components/commons/Icons";

export const routesNavMid: ItemNavMidModel[] = [
  {
    Icon: HomeNavMid,
    IconActive: HomeNavMidActive,
    path: "/",
    title: "Trang chủ",
  },
  {
    Icon: FriendsNavMid,
    IconActive: FriendsNavMidActive,
    path: "/friends",
    title: "Bạn bè",
  },
  {
    Icon: WatchNavMid,
    IconActive: WatchNavMidActive,
    path: "/watch",
    title: "Watch",
  },
  {
    Icon: GroupNavMid,
    IconActive: GroupNavMidActive,
    path: "/groups",
    title: "Nhóm",
  },
];
