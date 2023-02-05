import {
  MultiIconProfile1,
  MultiIconProfile2,
  AddPost,
  CustomeProfile,
  MultiIcon14,
  MultiIcon10,
} from "@/assets/images";
import { NotFoundSvg } from "@/assets/svg";
import { Message, IsFriend, AddFriend, Find } from "@/assets/images";

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

export const ManagePostIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${MultiIconProfile2})`,
        backgroundPosition: "0px -244px",
        backgroundSize: "26px 290px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const FilterPostIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${MultiIconProfile2})`,
        backgroundPosition: "0px -244px",
        backgroundSize: "26px 290px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const ListViewIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${MultiIconProfile2})`,
        backgroundPosition: "0px -208px",
        backgroundSize: "26px 290px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const GridViewIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${MultiIconProfile2})`,
        backgroundPosition: "0px -154px",
        backgroundSize: "26px 290px",
        width: "16px",
        height: "16px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const LiveVideoIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${MultiIconProfile1})`,
        backgroundPosition: "0px 0px",
        backgroundSize: "26px 518px",
        width: "24px",
        height: "24px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const PictureVideoIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
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

export const EventIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${MultiIconProfile1})`,
        backgroundPosition: "0px -274px",
        backgroundSize: "26px 518px",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const AddPostIcon = () => {
  return (
    <img
      className="filter-white"
      src={AddPost}
      alt=""
      height="16"
      width="16"
    ></img>
  );
};

export const CustomeProfileIcon = () => {
  return (
    <img
      src={CustomeProfile}
      className="filter-black dark:filter-white"
      alt=""
      height="16"
      width="16"
    ></img>
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
  return <img src={Message} alt="message" className="filter-white w-4 h-4" />;
};

export const IsFriendIcon = () => {
  return (
    <img
      src={IsFriend}
      alt="is friend"
      className="filter-black dark:filter-white w-4 h-4"
    />
  );
};

export const AddFriendIcon = () => {
  return (
    <img
      src={AddFriend}
      alt="add friend"
      className="filter-black dark:filter-white w-4 h-4"
    />
  );
};

export const FindIcon = () => {
  return (
    <img
      src={Find}
      alt="find content"
      className="filter-black dark:filter-white w-4 h-4"
    />
  );
};
