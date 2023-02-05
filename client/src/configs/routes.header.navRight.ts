import {
  SettingIcon,
  SupportIcon,
  DisplayIcon,
  FeedbackIcon,
  LogoutIcon,
  PrivacyCheckIcon,
  PrivacyCenterIcon,
  ActivityLogIcon,
  CustomFeedIcon,
  LanguageIcon,
  HelpCenterIcon,
  SupportInBoxIcon,
  ReportIcon,
  BackIcon,
} from "@/components/commons/Icons";
import { ItemProfile } from "@/models";

export const routesHeaderNavRight: [ItemProfile[]] = [
  [
    {
      Icon: SettingIcon,
      title: "Cài đặt & quyền riêng tư",
      type: "nav",
      children: [
        {
          Icon: BackIcon,
          title: "Cài đặt & quyền riêng tư",
          type: "back",
        },
        {
          Icon: SettingIcon,
          title: "Cài đặt",
          type: "link",
          path: "/notdevelop",
        },
        {
          Icon: PrivacyCheckIcon,
          title: "Kiểm tra quyền riêng tư",
          type: "link",
          path: "/notdevelop",
        },
        {
          Icon: PrivacyCenterIcon,
          title: "Trung tâm quyền riêng tư",
          type: "link",
          path: "/notdevelop",
        },
        {
          Icon: ActivityLogIcon,
          title: "Nhật ký hoạt động",
          type: "link",
          path: "/notdevelop",
        },
        {
          Icon: CustomFeedIcon,
          title: "Tùy chọn Bảng feed",
          type: "link",
          path: "/notdevelop",
        },
        {
          Icon: LanguageIcon,
          title: "Ngôn ngữ",
          type: "link",
          path: "/notdevelop",
        },
      ],
    },
    {
      Icon: SupportIcon,
      title: "Trợ giúp & hỗ trợ",
      type: "nav",
      children: [
        {
          Icon: BackIcon,
          title: "Trợ giúp & hỗ trợ",
          type: "back",
        },
        {
          Icon: HelpCenterIcon,
          title: "Trung tâm trợ giúp",
          type: "link",
          path: "/notdevelop",
        },
        {
          Icon: SupportInBoxIcon,
          title: "Hộp thư hỗ trợ",
          type: "link",
          path: "/notdevelop",
        },
        {
          Icon: ReportIcon,
          title: "Báo cáo sự cố",
          type: "link",
          path: "/notdevelop",
        },
      ],
    },
    {
      Icon: DisplayIcon,
      title: "Màn hình & trợ năng",
      type: "nav",
      children: [
        {
          Icon: BackIcon,
          title: "Màn hình & trợ năng",
          type: "back",
        },
        {
          Icon: DisplayIcon,
          title: "Chế độ tối",
          subTitle:
            "Điều chỉnh giao diện của Facebook để giảm độ chói và cho đôi mắt được nghỉ ngơi.",
          type: "adjust",
          adjust: "theme",
        },
      ],
    },
    {
      Icon: FeedbackIcon,
      title: "Đóng góp ý kiến",
      type: "link",
      path: "/notdevelop",
    },
    {
      Icon: LogoutIcon,
      title: "Đăng xuất",
      type: "function",
      func: "logout",
    },
  ],
];
