import { BackIcon } from "@/components/commons/Icons";
import { useAuth, useStateFriends, useWindowSize } from "@/hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SuggestItem from "./SuggestItem";
import { CustomScrollbar } from "@/components/commons";

const SuggestNav = () => {
  const size = useWindowSize();
  const { makeRequestWithAuth } = useAuth();
  const {
    list,
    selectId,
    onInit,
    onSelect,
    onMakeFriend,
    onRemoveSuggest,
    onCancelRequest,
  } = useStateFriends();

  useEffect(() => {
    const abortController: AbortController | null = new AbortController();
    const getData = async () => {
      const data = await makeRequestWithAuth(
        "get",
        "/api/v1/friends/suggestions",
        {},
        { signal: abortController.signal }
      );

      onInit(data?.__suggests, 5);
    };

    getData();
    return () => {
      abortController.abort();
    };
  }, []);

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
                  Gợi ý
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mx-4">
        <h2 className="text-1618 font-semibold text-primaryText dark:text-primaryTextDark">
          Những người bạn có thể biết
        </h2>
      </div>

      <div className="pt-3" style={{ height: size.height - 150 }}>
        <CustomScrollbar>
          {!!list &&
            Array.from(list.entries()).map(([keyItem, item]) => {
              if (item.isRemove) {
                return <></>;
              }
              return (
                <SuggestItem
                  key={keyItem}
                  props={item}
                  isActive={selectId === item._id}
                  onAdd={onMakeFriend}
                  onDelete={onRemoveSuggest}
                  onSelect={onSelect}
                  onCancelRequest={onCancelRequest}
                />
              );
            })}
        </CustomScrollbar>
      </div>
    </div>
  );
};

export default SuggestNav;
