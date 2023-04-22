import {
  AngrySvg,
  CareSvg,
  HahaSvg,
  LikeSvg,
  LoveSvg,
  SadSvg,
  WowSvg,
} from "@/assets";
import {
  MultiIcon,
  MultiIcon20,
  MultiIcon3,
  MultiIcon6,
} from "@/assets/images";
import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}

export const LikedIcon: FC<Props> = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-primary"
      style={{
        backgroundImage: `url(${MultiIcon6})`,
        backgroundPosition: "0px -1420px",
        backgroundSize: "28px 1524px",
        width: "18px",
        height: "18px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const LikeIcon: FC<Props> = ({ width = 18, height = 18 }) => {
  return <img src={LikeSvg} style={{ width, height }} />;
};
export const LoveIcon: FC<Props> = ({ width = 18, height = 18 }) => {
  return <img src={LoveSvg} style={{ width, height }} />;
};

export const CareIcon: FC<Props> = ({ width = 18, height = 18 }) => {
  return <img src={CareSvg} style={{ width, height }} />;
};
export const HahaIcon: FC<Props> = ({ width = 18, height = 18 }) => {
  return <img src={HahaSvg} style={{ width, height }} />;
};
export const WowIcon: FC<Props> = ({ width = 18, height = 18 }) => {
  return <img src={WowSvg} style={{ width, height }} />;
};
export const SadIcon: FC<Props> = ({ width = 18, height = 18 }) => {
  return <img src={SadSvg} style={{ width, height }} />;
};
export const AngryIcon: FC<Props> = ({ width = 18, height = 18 }) => {
  return <img src={AngrySvg} style={{ width, height }} />;
};

export const FilterPostIcon: FC<Props> = ({}) => {
  return (
    <i
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon3})`,
        backgroundPosition: "0px -151px",
        backgroundSize: "32px 334px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const EditPostIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon20})`,
        backgroundPosition: "0px -484px",
        backgroundSize: "22px 660px",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const DeletePostIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon6})`,
        backgroundPosition: "0px -1187px",
        backgroundSize: "26px 1572px",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const HiddenPostIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon6})`,
        backgroundPosition: "0px -758px",
        backgroundSize: "26px 1655px",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const PinPostIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon20})`,
        backgroundPosition: "0px -616px",
        backgroundSize: "22px 660px",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const UnPinPost = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon20})`,
        backgroundPosition: "0px -594px",
        backgroundSize: "22px 660px",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const LikePlaceholderIcon = () => {
  return (
    <i
      className="filter-black dark:filter-secondaryDark"
      style={{
        backgroundImage: `url(${MultiIcon})`,
        backgroundPosition: "0px -210px",
        backgroundSize: "26px 802px",
        width: "18px",
        height: "18px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const CommentIcon = () => {
  return (
    <i
      className="filter-black dark:filter-secondaryDark"
      style={{
        backgroundImage: `url(${MultiIcon})`,
        backgroundPosition: "0px -170px",
        backgroundSize: "26px 802px",
        width: "18px",
        height: "18px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const ShareIcon = () => {
  return (
    <i
      className="filter-black dark:filter-secondaryDark"
      style={{
        backgroundImage: `url(${MultiIcon})`,
        backgroundPosition: "0px -230px",
        backgroundSize: "26px 802px",
        width: "18px",
        height: "18px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};
