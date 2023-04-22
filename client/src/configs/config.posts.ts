import { FriendIcon } from "./../components/commons/Icons/Page.Home.Main.Icon";
import { GlobalIcon, PrivateIcon } from "@/components/commons/Icons";
import { BackgroundItem, FeelingItem } from "@/models";
import {
  buonte,
  cophuc,
  dayhyvong,
  dien,
  duocyeu,
  hanhphuc,
  mayman,
  thoaimai,
  thugian,
  tuhao,
  tuyet,
  tuyetvoi,
  haohung,
  khacbiet,
  lalung,
  trongrong,
  loso,
  hettien,
  dethuong,
} from "@/assets";
import {
  LikeSvg,
  LoveSvg,
  CareSvg,
  HahaSvg,
  WowSvg,
  AngrySvg,
  SadSvg,
} from "@/assets/svgs/Posts";
import {
  BtnBackground1,
  BtnBackground2,
  BtnBackground3,
  Background1,
  Background2,
  Background3,
} from "@/assets";
import {
  LikeIcon,
  LikedIcon,
  LoveIcon,
  CareIcon,
  HahaIcon,
  SadIcon,
  WowIcon,
  AngryIcon,
} from "@/components/commons/Icons/Post.Icon";
import {
  emoji1,
  emoji2,
  emoji3,
  emoji4,
  emoji5,
  emoji6,
  emoji7,
  emoji8,
  emoji9,
  emoji10,
  emoji11,
  emoji12,
  emoji13,
  emoji14,
  emoji15,
  emoji16,
  emoji17,
  emoji18,
  emoji19,
  emoji20,
} from "@/assets/images";
import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}

export const reactEmotionSvg: { src: string; title: string }[] = [
  {
    src: LikeSvg,
    title: "Thích",
  },
  {
    src: LoveSvg,
    title: "Yêu thích",
  },
  {
    src: CareSvg,
    title: "Thương thương",
  },
  {
    src: HahaSvg,
    title: "Haha",
  },
  {
    src: WowSvg,
    title: "Wow",
  },
  {
    src: SadSvg,
    title: "Buồn",
  },
  {
    src: AngrySvg,
    title: "Phẫn nộ",
  },
];

export const classifyTypeReactedConfig: Map<
  number | "all",
  { Icon: FC<Props> }
> = new Map<number | "all", { Icon: FC<Props> }>([
  ["all", { Icon: LikeIcon }],
  [0, { Icon: LikeIcon }],
  [1, { Icon: LoveIcon }],
  [2, { Icon: CareIcon }],
  [3, { Icon: HahaIcon }],
  [4, { Icon: WowIcon }],
  [5, { Icon: SadIcon }],
  [6, { Icon: AngryIcon }],
]);

export const reactEmotions: { Icon: FC<Props>; title: string }[] = [
  {
    Icon: LikeIcon,
    title: "Thích",
  },
  {
    Icon: LoveIcon,
    title: "Yêu thích",
  },
  {
    Icon: CareIcon,
    title: "Thương thương",
  },
  {
    Icon: HahaIcon,
    title: "Haha",
  },
  {
    Icon: WowIcon,
    title: "Wow",
  },
  {
    Icon: SadIcon,
    title: "Buồn",
  },
  {
    Icon: AngryIcon,
    title: "Phẫn nộ",
  },
];

export const reactedEmotions: {
  Icon: FC<Props>;
  title: string;
  color: string;
}[] = [
  {
    Icon: LikedIcon,
    title: "Thích",
    color: "#2078f4",
  },
  {
    Icon: LoveIcon,
    title: "Yêu thích",
    color: "#f33e58",
  },
  {
    Icon: CareIcon,
    title: "Thương thương",
    color: "#f7b125",
  },
  {
    Icon: HahaIcon,
    title: "Haha",
    color: "#f7b125",
  },
  {
    Icon: WowIcon,
    title: "Wow",
    color: "#f7b125",
  },
  {
    Icon: SadIcon,
    title: "Buồn",
    color: "#f7b125",
  },
  {
    Icon: AngryIcon,
    title: "Phẫn nộ",
    color: "#e9710f",
  },
];

export const feelings: FeelingItem[] = [
  {
    title: "tuyệt vời",
    src: tuyetvoi,
  },
  {
    title: "tuyệt",
    src: tuyet,
  },
  {
    title: "tự hào",
    src: tuhao,
  },
  {
    title: "thư giản",
    src: thugian,
  },
  {
    title: "may mắn",
    src: mayman,
  },
  {
    title: "thoải mái",
    src: thoaimai,
  },
  {
    title: "hạnh phúc",
    src: hanhphuc,
  },
  {
    title: "được yêu",
    src: duocyeu,
  },
  {
    title: "điên",
    src: dien,
  },
  {
    title: "đầy hy vọng",
    src: dayhyvong,
  },
  {
    title: "buồn tẻ",
    src: buonte,
  },
  {
    title: "có phúc",
    src: cophuc,
  },
  {
    src: khacbiet,
    title: "khác biêt",
  },
  {
    src: lalung,
    title: "lạ lùng",
  },
  {
    src: trongrong,
    title: "trống rỗng",
  },
  {
    src: loso,
    title: "lo sợ",
  },
  {
    src: hettien,
    title: "hết tiền",
  },
  {
    src: dethuong,
    title: "dễ thương",
  },
  {
    src: haohung,
    title: "hào hứng",
  },
];

export const backgrounds: BackgroundItem[] = [
  {
    format: 1,
  },
  {
    format: 2,
    type: "image",
    srcBtn: BtnBackground1,
    srcBg: Background1,
    theme: "dark",
  },
  {
    format: 2,
    type: "image",
    srcBtn: BtnBackground2,
    srcBg: Background2,
    theme: "light",
  },
  {
    format: 2,
    type: "image",
    srcBtn: BtnBackground3,
    srcBg: Background3,
    theme: "light",
  },
  {
    format: 2,
    type: "color",
    color: "#626976",
    theme: "dark",
  },
  {
    format: 2,
    type: "color",
    color: "#c600ff",
    theme: "dark",
  },
];

export const audianceConfig: {
  Icon: FC<Props>;
  title: string;
  desc?: string;
  audiance: 1 | 2 | 3;
}[] = [
  {
    Icon: GlobalIcon,
    title: "Công khai",
    desc: "Bất kỳ ai ở trên hoặc ngoài Facebook",
    audiance: 3,
  },
  {
    Icon: FriendIcon,
    title: "Bạn bè",
    desc: "Bạn bè của bạn trên Facebook",
    audiance: 2,
  },
  {
    Icon: PrivateIcon,
    title: "Chỉ mình tôi",
    audiance: 1,
  },
];

export const emojiConfig: { src: string; title: string }[] = [
  { src: emoji1, title: "😀" },
  { src: emoji2, title: "😃" },
  { src: emoji3, title: "😄" },
  { src: emoji4, title: "😁" },
  { src: emoji5, title: "😆" },
  { src: emoji6, title: "🥹" },
  { src: emoji7, title: "😅" },
  { src: emoji8, title: "😂" },
  { src: emoji9, title: "🤣" },
  { src: emoji10, title: "🥲" },
  { src: emoji11, title: "☺️" },
  { src: emoji12, title: "😊" },
  { src: emoji13, title: "😇" },
  { src: emoji14, title: "🙂" },
  { src: emoji15, title: "🙃" },
  { src: emoji16, title: "😉" },
  { src: emoji17, title: "😌" },
  { src: emoji18, title: "😍" },
  { src: emoji19, title: "🥰" },
  { src: emoji20, title: "😘" },
];
