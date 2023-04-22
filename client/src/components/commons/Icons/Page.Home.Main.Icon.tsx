import { MultiIcon14, MultiIcon9 } from "@/assets/images";
import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  isActive?: boolean;
}

export const PrivateIcon: FC<Props> = ({ width = 12, height = 12 }) => {
  return (
    <div className="text-primaryIcon dark:text-primaryTextDark">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export const ArrowDownIcon: FC<Props> = ({ width, height, isActive }) => {
  return (
    <i
      data-visualcompletion="css-img"
      className={`${
        isActive ? "filter-primary" : "filter-black dark:filter-white"
      }`}
      style={{
        backgroundImage: `url(${MultiIcon9})`,
        backgroundPosition: "-2px -185px",
        backgroundSize: "204px 204px",
        width: "12px",
        height: "12px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const ThreedotIcon = () => {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em">
      <g fillRule="evenodd" transform="translate(-446 -350)">
        <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
      </g>
    </svg>
  );
};

export const GlobalIcon: FC<Props> = ({ width = 16, height = 16 }) => {
  return (
    <div
      className="text-primaryIcon dark:text-primaryIconDark
    "
    >
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        width={width}
        height={height}
      >
        <title>Đã chia sẻ với Công khai</title>
        <g fillRule="evenodd" transform="translate(-448 -544)">
          <g>
            <path
              d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
              transform="translate(354 143.5)"
            ></path>
            <path
              d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
              transform="translate(354 143.5)"
            ></path>
            <path
              fillRule="nonzero"
              d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
              transform="translate(354 143.5)"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export const FriendIcon: FC<Props> = ({ width = 16, height = 16 }) => {
  return (
    <div className="text-primaryIcon dark:text-primaryIconDark">
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        width={width}
        height={height}
      >
        <g fillRule="evenodd" transform="translate(-448 -544)">
          <path d="M459.75 551c-1.24 0-2.25-1.121-2.25-2.5 0-1.542.863-2.5 2.25-2.5s2.25.958 2.25 2.5c0 1.379-1.01 2.5-2.25 2.5m.692 1h-1.384c-.105 0-.21.005-.312.014a.3.3 0 0 0-.186.509 5.03 5.03 0 0 1 1.44 3.53v1.147a.3.3 0 0 0 .3.3h2.015c.929 0 1.685-.756 1.685-1.685v-.257a3.562 3.562 0 0 0-3.558-3.558m-3.032 6.5h-7.82c-.877 0-1.59-.714-1.59-1.59v-.857a4.057 4.057 0 0 1 4.053-4.053h2.894a4.057 4.057 0 0 1 4.053 4.053v.856c0 .877-.713 1.591-1.59 1.591m-3.91-7.5c-1.379 0-2.5-1.346-2.5-3 0-1.879.935-3 2.5-3s2.5 1.121 2.5 3c0 1.654-1.121 3-2.5 3"></path>
        </g>
      </svg>
    </div>
  );
};

export const EmotionIcon = () => {
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${MultiIcon14})`,
        backgroundPosition: "0px -130px",
        backgroundSize: "26px 342px",
        width: "24px",
        height: "24px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export const TagIcon = () => {
  return (
    <i
      style={{
        backgroundImage: `url(${MultiIcon14})`,
        backgroundPosition: "0px -144px",
        backgroundSize: "24px 315px",
        width: "24px",
        height: "24px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};
