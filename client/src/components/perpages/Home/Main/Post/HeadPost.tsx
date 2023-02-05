import { FC } from "react";
import {
  ThreedotIcon,
  GlobalIcon,
  FriendIcon,
  PrivateIcon,
} from "@/components/commons/Icons";
import { timeSince, timeHover } from "@/utils";
import { LazyImage, Tooltip } from "@/components/commons";

interface Props {
  fullName: string;
  avatarUrl: string;
  audience: number;
  createAt: number;
}

interface PropsAudiance {
  audienceType: number;
}

const Audiance: FC<PropsAudiance> = ({ audienceType = 0 }) => {
  switch (audienceType) {
    case 0:
      return <GlobalIcon />;
    case 1:
      return <FriendIcon />;
    case 2:
      return <PrivateIcon />;
    default:
      return <></>;
  }
};

const HeadPost: FC<Props> = ({ fullName, avatarUrl, audience, createAt }) => {
  return (
    <div className="px-4 pt-3 mb-3 text-primaryText dark:text-primaryTextDark">
      <div className="flex">
        <div className="shrink-0">
          <LazyImage
            src={avatarUrl}
            alt="avatar"
            className="rounded-full w-10 h-10 cursor-pointer"
          />
        </div>
        <div className="grow flex flex-col ml-2">
          <div className="font-semibold text-1418 hover:underline hover:cursor-pointer">
            {fullName}
          </div>
          <div className="flex items-center">
            <span>
              <Tooltip tooltip={String(timeHover(createAt))}>
                <span className="text-1215 font-normal text-secondaryText dark:text-secondaryTextDark cursor-pointer">
                  {timeSince(createAt)}
                </span>
              </Tooltip>
            </span>
            <span className="ml-3 text-secondaryIcon dark:text-secondaryIconDark">
              <Audiance audienceType={audience} />
            </span>
          </div>
        </div>

        <div className="shrink-0 w-9 h-9 rounded-full text-primaryIcon dark:text-primaryIconDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
          <div className="flex items-center justify-center w-full h-full">
            <ThreedotIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeadPost;
