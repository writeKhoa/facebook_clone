import { ProfileProps } from "@/models";
import { FC } from "react";
import {
  Avatar,
  Background,
  NavProfile,
  Options,
} from "@/components/commons/profile-commons/other-commons";
import { ShortInfo } from "@/components/commons";
import { FindIcon } from "@/components/commons";
import Request from "./Request";

interface Props {
  user: ProfileProps;
}
const Overview: FC<Props> = ({ user }) => {
  const { _id, backgroundUrl, mediumAvatarUrl, friends, fullName } = user;
  return (
    <div className="bg-surface dark:bg-surfaceDark">
      <div className="flex flex-col w-max-1095 mx-auto items-center justify-center bg-surface dark:bg-surfaceDark">
        <Background backgroundUrl={backgroundUrl} />

        <div className="relative mx-auto w-max-1050 max1260:w-full">
          <div className="flex justify-center pb-4 max900:flex-col max1260:items-center">
            <div className="absolute -top-8 left-4 mr-4 -mb-4  max900:absolute-vertical-center max1260:-top-[86px] max1260:mr-0">
              <Avatar mediumAvatarUrl={mediumAvatarUrl} />
            </div>

            <div className="w-[174px] h-0 mr-4"></div>

            <div className="mt-8 mb-4 grow h-[98px] max1260:mt-[106px] max1260:mx-auto">
              <ShortInfo fullName={fullName} friends={friends} />
            </div>

            <div className="shrink-0 mt-8 mb-4 ml-8 max1260:ml-0">
              <div className="flex items-end h-full">
                <div className="flex mt-2 -mx-1">
                  <Request id={_id} />

                  <div className="mx-1 mt-2">
                    <div className="px-3 py-1.5 bg-normalBtn dark:bg-normalBtnDark rounded-md cursor-pointer">
                      <div className="flex items-center -mx-0.5">
                        <div className="mx-0.5">
                          <span className="text-primaryText dark:text-primaryTextDark">
                            <FindIcon />
                          </span>
                        </div>
                        <div className="mx-0.5">
                          <span className="text-1516 font-semibold text-primaryText dark:text-primaryTextDark">
                            Tìm kiếm
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-black/20 dark:bg-white/20"></div>

          <div className="flex justify-between h-[60px]">
            <div className="grow">
              <NavProfile id={_id} />
            </div>
            <div className="shrink-0 flex items-center">
              <Options />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
