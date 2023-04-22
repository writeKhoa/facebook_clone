import { FC, useEffect, useRef, useState } from "react";
import { BackIcon } from "@/components/commons/Icons";
import { Link } from "react-router-dom";
import {
  useAuth,
  useClickOutside,
  useStateFriends,
  useWindowSize,
} from "@/hooks";
import { RequestItem, RequestSent } from "./sub";
import { CustomScrollbar } from "@/components/commons";

interface Props {}

const RequestNav: FC<Props> = () => {
  const size = useWindowSize();
  const { makeRequestWithAuth } = useAuth();
  const { list, selectId, onInit, onSelect, onConfirm, onDelete } =
    useStateFriends();
  const [count, setCount] = useState<number>(0);
  const [isOpenRequestSent, setIsOpenRequestSent] = useState<boolean>(false);

  const requestSentRef = useRef<HTMLDivElement>(null);

  const handleOpenRequestSent = () => setIsOpenRequestSent((pre) => !pre);

  useEffect(() => {
    const abortController: AbortController | null = new AbortController();

    const getData = async () => {
      const data = await makeRequestWithAuth(
        "get",
        "/api/v1/friends/requests/received"
      );

      const newList = data.__requestReceivedList.map((item: any) => {
        const { at, userSentId } = item;
        return {
          at,
          ...userSentId,
        };
      });

      onInit(newList, 3);
      setCount(data?.__requestReceivedCount);
    };

    getData();
    return () => {
      abortController.abort();
    };
  }, []);

  useClickOutside([requestSentRef], handleOpenRequestSent, []);
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
                <Link to={"/friends"}>
                  <span className="text-1316 font-normal text-secondaryText hover:underline hover:cursor-pointer">
                    Bạn bè
                  </span>
                </Link>
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

        <div onClick={handleOpenRequestSent} className="inline-block">
          <span className="text-1316 font-medium text-primary cursor-pointer">
            Xem lời mời đã gửi
          </span>
        </div>
      </div>

      <div className="pt-3" style={{ height: size.height - 190 }}>
        <CustomScrollbar>
          {!!list &&
            Array.from(list.entries()).map(([keyItem, item]) => {
              return (
                <RequestItem
                  key={keyItem}
                  props={item}
                  isActive={selectId === item._id}
                  onConfirm={onConfirm}
                  onDelete={onDelete}
                  onSelect={onSelect}
                />
              );
            })}
        </CustomScrollbar>
      </div>

      {isOpenRequestSent && (
        <RequestSent
          ref={requestSentRef}
          isOpen={isOpenRequestSent}
          onClose={handleOpenRequestSent}
        />
      )}
    </div>
  );
};

export default RequestNav;
