import { BackIcon } from "@/components/commons/Icons";
import { Link } from "react-router-dom";
import { CustomScrollbar, FindIcon } from "@/components/commons";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuth, useStateFriends, useWindowSize } from "@/hooks";
import FriendItem from "./FriendItem";

const ListNav = () => {
  const { makeRequestWithAuth } = useAuth();
  const size = useWindowSize();
  const { list, selectId, onInit, onSelect } = useStateFriends();
  const [count, setCount] = useState<number>(0);

  const [searchFriend, setSearchFriend] = useState<string>("");

  const handleChangeSearchFriend = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFriend(e.target.value);
  };

  useEffect(() => {
    const abortController: AbortController | null = new AbortController();

    const getData = async () => {
      const data = await makeRequestWithAuth("get", "/api/v1/friends/list");
      const newList = data?.__friendList.map((item: any) => {
        const { friendId } = item;
        return {
          ...friendId,
        };
      });
      setCount(data?.__friendCount);
      onInit(newList, 2);
    };
    getData();

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
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
                  Tất cả bạn bè
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-5 pb-5 border-b border-divider dark:border-dividerDark">
        <div className="flex">
          <span className="flex items-center pl-[10px] rounded-l-full bg-black/10 dark:bg-white/10 text-secondaryIcon dark:text-secondaryIcon">
            <FindIcon />
          </span>
          <input
            value={searchFriend}
            onChange={handleChangeSearchFriend}
            type="text"
            className="w-full h-9 rounded-r-full pb-[9px] px-[6px] pt-[7px] bg-black/10 dark:bg-white/10 accent-primaryText dark:accent-primaryTextDark text-primaryText dark:text-primaryTextDark"
            placeholder="Tìm kiếm bạn bè"
          />
        </div>
      </div>

      <div className="pt-3" style={{ height: size.height - 190 }}>
        <CustomScrollbar>
          <div className="px-4 pb-1">
            <span className="text-primaryText dark:text-primaryTextDark font-semibold text-1716">
              {count > 0 ? `${count} bạn bè` : null}
            </span>
          </div>

          {!!list &&
            Array.from(list.entries()).map(([keyItem, item]) => {
              if (!item.fullName.includes(searchFriend)) return null;
              return (
                <FriendItem
                  key={keyItem}
                  props={item}
                  isActive={selectId === item._id}
                  onSelect={() => onSelect(keyItem)}
                />
              );
            })}
        </CustomScrollbar>
      </div>
    </>
  );
};

export default ListNav;
