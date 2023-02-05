import { FC } from "react";
import Avatar from "./Avatar";
import Background from "./Background";
import NavProfile from "./NavProfile";
import { ProfileProps } from "@/models";

interface Props {
  user: ProfileProps;
}

const Overview: FC<Props> = ({ user }) => {
  const { id, backgroundUrl, avatarUrl, fullName } = user;
  return (
    <div className="bg-surface">
      <div className="relative w-[940px] mx-auto">
        <Background backgroundUrl={backgroundUrl} />
      </div>

      <div className="">
        <div className="relative flex w-[876px] mx-auto border-b border-divider pb-4">
          <div className="ml-10 mr-4">
            <div className="absolute bottom-4">
              <Avatar avatarUrl={avatarUrl} />
            </div>
          </div>

          <div className="w-[168px]"></div>

          <div className="mt-8 mb-4">
            <h1 className="text-3238 font-bold">{fullName}</h1>
          </div>
        </div>
      </div>

      <div className="w-[876px] mx-auto">
        <NavProfile id={id} />
      </div>
    </div>
  );
};

export default Overview;
