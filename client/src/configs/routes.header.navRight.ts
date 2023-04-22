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
import {
  Event, Friends, Groups, Favorites, MostRecent, Pages, GamingVideo, PlayGame, Watch, LiveVideo, FacebookPay, MarketPlace,
  Memories, Save, AdsManager, AdCenter, BloodDonation, ClimateScienceCenter, EmotionHealth, Fundraiser, MessengerKid

} from "@/assets/images"

import { ItemProfile, MenuNavRightItem } from "@/models";

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

export const configMenuNavRight: MenuNavRightItem[] = [
  {
    groupName: "Xã hội",
    list: [
      {
        title: 'Sự kiện',
        desc: 'Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.',
        srcImg: Event,
      },
      {
        title: 'Bạn bè',
        desc: 'Tìm kiếm bạn bè hoặc những người bạn có thể biết.',
        srcImg: Friends
      },
      {
        title: 'Nhóm',
        desc: 'Kết nối với những người cùng chung sở thích.',
        srcImg: Groups,
      },
      {
        title: 'Yêu thích',
        desc: "View posts by Favorites",
        srcImg: Favorites
      },
      {
        title: "Gần đây nhất",
        desc: "Xem bài viết gần đây nhất từ bạn bè, nhóm, Trang và hơn thế nữa.",
        srcImg: MostRecent
      },
      {
        title: "Trang",
        desc: "Khám phá và kết nối với các doanh nghiệp trên Facebook.",
        srcImg: Pages
      }

    ]
  },
  {
    groupName: "Giải trí",
    list: [
      {
        title: "Video chơi game",
        desc: "Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích.",
        srcImg: GamingVideo
      },
      {
        title: "Chơi game",
        desc: "Chơi game bạn yêu thích",
        srcImg: PlayGame,
      },
      {
        title: "Watch",
        desc: "Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.",
        srcImg: Watch
      },
      {
        title: "Video trực tiếp",
        desc: "Xem video trực tiếp phổ biến từ khắp thế giới.",
        srcImg: LiveVideo
      }
    ]
  },
  {
    groupName: "Mua sắm",
    list: [
      {
        title: "Đơn đặt hàng và thanh toán",
        desc: "Một cách dễ dàng, bảo mật để thanh toán trên các ứng dụng bạn đang dùng.",
        srcImg: FacebookPay
      },
      {
        title: "Marketplace",
        desc: "Mua bán trong cộng đồng của bạn.",
        srcImg: MarketPlace
      }
    ]
  },
  {
    groupName: "Cá nhân",
    list: [
      {
        title: "Hoạt động quảng cáo gần đây",
        desc: "Xem toàn bộ quảng cáo mà bạn đã tương tác trên Facebook.",
        srcImg: MostRecent
      },
      {
        title: "Kỷ niệm",
        desc: "Lướt xem ảnh, video và bài viết cũ của bạn trên Facebook.",
        srcImg: Memories
      },
      {
        title: "Đã lưu",
        desc: "Tìm bài viết, ảnh và video mà bạn đã lưu để xem sau.",
        srcImg: Save
      }
    ]
  },
  {
    groupName: "Chuyên nghiệp",
    list: [
      {
        title: "Trình quản lý quảng cáo",
        desc: "Tạo, quản lý và theo dõi hiệu quả quảng cáo.",
        srcImg: AdsManager
      },
      {
        title: "Trung tâm quảng cáo",
        desc: "Dùng các tính năng đơn giản hơn để quản lý mọi quảng cáo bạn tạo trên Trang.",
        srcImg: AdCenter
      }
    ]
  },
  {
    groupName: "Nguồn lực cho cộng động",
    list: [
      {
        title: "Hiến máu",
        desc: "Cập nhật thông tin về hoạt động hiến mấu ở gần bạn.",
        srcImg: BloodDonation
      },
      {
        title: "Trung tâm khoa học khí hậu",
        desc: "Tìm hiểu về vấn đề biến đổi khí hậu và tác động của hiện tượng này.",
        srcImg: ClimateScienceCenter
      },
      {
        title: "Ứng phó khẩn cấp",
        desc: "Tìm thông tin mới nhất về các cuộc khủng hoảng đang diễn ra trên thế giới.",
        srcImg: EmotionHealth
      },
      {
        title: "Chiến dịch gây quỹ",
        desc: "Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và mục đích cá nhân.",
        srcImg: Fundraiser
      }
    ]
  },
  {
    groupName: "Sản phẩm khác của Meta",
    list: [
      {
        title: "Messenger nhí",
        desc: "Cho phép bé nhắn tin với bạn và gia đình",
        srcImg: MessengerKid
      }
    ]
  }
]

export const configCreateNavRight1: { Icon: () => JSX.Element, title: string, desc: string }[] = [
  {
    Icon: SettingIcon,
    title: 'Đăng',
    desc: 'Chia sẻ bài viết trên Bảng tin.'
  },
  {
    Icon: SettingIcon,
    title: 'Tin',
    desc: 'Bạn có thể chia sẻ ảnh hoặc viết gì đó.'
  },
  {
    Icon: SettingIcon,
    title: 'Phòng họp mặt',
    desc: 'Chat video với bất kỳ ai trên hoặc bên ngoài Facebook, không giới hạn thời gian.'
  },
]

export const configCreateNavRight2: { Icon: () => JSX.Element, title: string, desc: string }[] = [
  {
    Icon: SettingIcon,
    title: 'Trang',
    desc: 'Kết nối và chia sẻ với khách hàng hoặc fan.'
  },
  {
    Icon: SettingIcon,
    title: 'Quảng cáo',
    desc: 'Quảng cáo doanh nghiệp, thương nghiệp hoặc tổ chức của bạn.'
  },
  {
    Icon: SettingIcon,
    title: 'Nhóm',
    desc: 'Kết nối với những người cũng chung sở thích.'
  },
  {
    Icon: SettingIcon,
    title: 'Sự kiện',
    desc: 'Gắn kết mọi người thông qua sự kiện riêng tư hoặc công khai.'
  },
  {
    Icon: SettingIcon,
    title: 'Bài niêm yết trên Marketplace',
    desc: 'Bán hàng cho người trong cộng đồng của bạn.'
  },

]