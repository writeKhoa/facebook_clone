import {
  AdCenter,
  AdsManager,
  BloodDonation,
  ClimateScienceCenter,
  Crisis,
  EmotionHealth,
  Event,
  FacebookPay,
  Favorites,
  Friends,
  Fundraiser,
  GamingVideo,
  Groups,
  LiveVideo,
  MarketPlace,
  Memories,
  Messenger,
  MessengerKid,
  MostRecent,
  Pages,
  PlayGame,
  RecentActivity,
  Save,
  Watch,
} from "@/assets/images/Home.NavLeft";

export const routesHomeNavLeftPart = [
  { path: "/friends", imgSrc: Friends, title: "Bạn bè" },
  { path: "/groups", imgSrc: Groups, title: "Nhóm" },
  { path: "/notdevelop", imgSrc: MostRecent, title: "Gần đây nhất" },
  { path: "/notdevelop", imgSrc: MarketPlace, title: "Marketplace" },
  { path: "/watch", imgSrc: Watch, title: "Watch" },
];

export const routesHomeNavLeftFull = [
  { path: "/notdevelop", imgSrc: Fundraiser, title: "Chiến dịch gây quỹ" },
  { path: "/notdevelop", imgSrc: PlayGame, title: "Chơi game" },
  { path: "/notdevelop", imgSrc: Save, title: "Đã lưu" },
  { path: "/notdevelop", imgSrc: FacebookPay, title: "Facebook Pay" },
  { path: "/notdevelop", imgSrc: BloodDonation, title: "Hiến máu" },
  { path: "/notdevelop", imgSrc: RecentActivity, title: "Hoạt động gần đây" },
  { path: "/notdevelop", imgSrc: Memories, title: "Kỷ niệm" },
  { path: "/notdevelop", imgSrc: Messenger, title: "Messenger" },
  { path: "/notdevelop", imgSrc: MessengerKid, title: "Messenger nhí" },
  { path: "/notdevelop", imgSrc: Event, title: "Sự kiện" },
  { path: "/notdevelop", imgSrc: EmotionHealth, title: "Sức khỏe cảm xúc" },
  { path: "/notdevelop", imgSrc: Pages, title: "Trang" },
  { path: "/notdevelop", imgSrc: AdsManager, title: "Trình quản lý quảng cáo" },
  {
    path: "/notdevelop",
    imgSrc: ClimateScienceCenter,
    title: "Trung tâm khoa học khí hậu",
  },
  { path: "/notdevelop", imgSrc: AdCenter, title: "Trung tâm quảng cáo" },
  {
    path: "/notdevelop",
    imgSrc: Crisis,
    title: "Ứng phó khẩn cấp",
  },
  {
    path: "/notdevelop",
    imgSrc: GamingVideo,
    title: "Video chơi game",
  },
  {
    path: "/notdevelop",
    imgSrc: LiveVideo,
    title: "Video trực tiếp",
  },
  {
    path: "/notdevelop",
    imgSrc: Favorites,
    title: "Yêu thích",
  },
];
