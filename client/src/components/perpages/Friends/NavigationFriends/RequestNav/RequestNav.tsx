import { FC } from "react";
import { BackIcon } from "@/components/commons/Icons";
import { Link } from "react-router-dom";
import { QuickInfo } from "@/models/commons";

interface Props {
  count?: number;
  list?: QuickInfo[];
}

const RequestNav: FC<Props> = ({ count, list }) => {
  return (
    <div>
      <div className="flex mt-5 mx-2 mb-3">
        <div className="mr-3">
          <Link to={"/friends"}>
            <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
              <BackIcon />
            </div>
          </Link>
        </div>
        <div className="-my-2">
          <div className="my-2">
            <div className="-my-[6px]">
              <div className="my-[6px]">
                <span className="text-1316 font-normal text-secondaryText hover:underline hover:cursor-pointer">
                  Bạn bè
                </span>
              </div>
            </div>
            <div className="-my-2">
              <div className="my-2">
                <h1 className="text-2428 font-bold text-primaryText dark:text-primaryTextDark">
                  Lời mời kết bạn
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-2 mx-4 border-b border-divider dark:border-dividerDark"></div>

      <div className="flex flex-col mx-4">
        <div className="mt-3">
          <h2 className="text-1618 font-semibold text-primaryText dark:text-primaryTextDark">
            {!!count
              ? `${count} lời mời kết bạn`
              : "Không có lời mời kết bạn nào"}
          </h2>
        </div>

        <div>
          <span className="text-1215 font-normal text-primary">
            Xem lời mời đã gửi
          </span>
        </div>

        <div>
          {list &&
            list.map((item) => {
              const { avatarUrl, id, fullName } = item;
              return <div>{fullName}</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default RequestNav;
