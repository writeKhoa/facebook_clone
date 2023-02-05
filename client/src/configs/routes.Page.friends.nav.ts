import {
  HomeFriendIcon,
  FriendRequestIcon,
  FriendSuggestIcon,
  FriendListIcon,
  FriendBirthday,
  FriendCustomList,
} from "@/components/commons/Icons";

interface itemNavFriend {
  Icon?: () => JSX.Element;
  title: string;
  type: "link" | "nav" | "back";
  path?: string;
  subTitle?: string;
  children?: itemNavFriend[];
}

export const routesFriendsNav: itemNavFriend[] = [
  {
    Icon: HomeFriendIcon,
    title: "Trang chủ",
    type: "link",
    path: "",
  },
  {
    Icon: FriendRequestIcon,
    title: "Lời mời kết bạn",
    type: "nav",
    path: "/requests",
    children: [
      {
        title: "Lời mời kết bạn",
        type: "back",
      },
    ],
  },
  {
    Icon: FriendSuggestIcon,
    title: "Gợi ý",
    type: "nav",
    path: "/suggest",
    children: [
      {
        title: "Gợi ý",
        type: "back",
      },
    ],
  },
  {
    Icon: FriendListIcon,
    title: "Tất cả bạn bè",
    type: "nav",
    path: "/list",
    children: [
      {
        title: "Tất cả bạn bè",
        type: "back",
      },
    ],
  },
  {
    Icon: FriendBirthday,
    title: "Sinh nhật",
    type: "link",
    path: "/birthdays",
  },
  {
    Icon: FriendCustomList,
    title: "Danh sách tùy chỉnh",
    type: "nav",
    path: "/custom",
    children: [
      {
        type: "back",
        title: "Danh sách tùy chỉnh",
      },
    ],
  },
];
