import {
  MultiIcon10,
  MultiIcon14,
  MultiIcon6,
  MultiIcon9,
} from "@/assets/images";
import { NotFoundSvg } from "@/assets/svgs";
import { FC } from "react";

export const CameraBackgroundProfileIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${MultiIcon10})`,
        backgroundPosition: "0px -502px",
        backgroundSize: "26px 660px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const CameraAvatarProfileIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon10})`,
        backgroundPosition: "0px -158px",
        backgroundSize: "26px 660px",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

interface Props {
  isDisabled?: boolean;
}
export const PictureVideoIcon: FC<Props> = ({ isDisabled = false }) => {
  return (
    <i
      data-visualcompletion="css-img"
      className={`${isDisabled ? "filter-disabled" : ""}`}
      style={{
        backgroundImage: `url(${MultiIcon14})`,
        backgroundPosition: "0px -182px",
        backgroundSize: "26px 342px",
        width: "24px",
        height: "24px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const AddPostIcon = () => {
  return (
    <div className="inline-block text-1214">
      <span className="text-primaryIconDark text-2024 font-semibold">+</span>
    </div>
  );
};

export const CustomeProfileIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon6})`,
        backgroundPosition: "0px -721px",
        backgroundSize: "21px 1190px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const ShowMoreIcon = () => {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em">
      <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
    </svg>
  );
};

export const NotFoundIcon = () => {
  return <img src={NotFoundSvg} className="h-28" alt="" />;
};

export const ThreeDotIcon = () => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
      <circle cx="12" cy="12" r="2.5"></circle>
      <circle cx="19.5" cy="12" r="2.5"></circle>
      <circle cx="4.5" cy="12" r="2.5"></circle>
    </svg>
  );
};

export const MessageIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon9})`,
        backgroundPosition: "-128px -132px",
        backgroundSize: "190px 190px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const AddFriendIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon10})`,
        backgroundPosition: "1px -179px",
        backgroundSize: "19px 482px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const CancelAddFriendIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon10})`,
        backgroundPosition: "1px -211px",
        backgroundSize: "19px 482px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const ResponseRequestMakeFriendIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon10})`,
        backgroundPosition: "1px -195px",
        backgroundSize: "19px 482px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const UnFriendIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon10})`,
        backgroundPosition: "0px -750px",
        backgroundSize: "32px 836px",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const IsFriendIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      className="filter-black dark:filter-white"
      style={{
        backgroundImage: `url(${MultiIcon10})`,
        backgroundPosition: "1px -195px",
        backgroundSize: "19px 482px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};
