import {
  ArrowNavLeft,
  LogoFB2,
  SearchNavLeft,
} from "@/components/commons/Icons";
import { useClickOutside } from "@/hooks";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ListSearch from "./ListSearch";
import { useDebounce, useAuth } from "@/hooks";

const NavLeft = () => {
  const { makeRequestWithAuth } = useAuth();
  const divRef = useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchList, setSearchList] = useState<any[]>([]);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleSearchText = (e: any) => {
    setSearchText(e.target.value);
  };

  const searchTextDebounced = useDebounce(searchText, 500);

  const handleOutFocus = () => {
    setIsFocus(false);
  };

  useClickOutside(divRef, handleOutFocus, []);

  useEffect(() => {
    const getSearch = async () => {
      try {
        if (!searchText) {
          setSearchList([]);
        } else {
          const { data } = await makeRequestWithAuth("post", "/api/v1/search", {
            fullName: searchTextDebounced,
          });
          setSearchList([...data]);
        }
      } catch (error) {
        console.log("error search ", error);
      }
    };
    getSearch();
    const controller = new AbortController();
    return () => controller.abort();
  }, [searchTextDebounced]);
  useEffect(() => {}, [searchList]);
  return (
    <div
      ref={divRef}
      className={`flex flex-col items-center pr-4 h-full w-80 duration-100 transition-all overflow-hidden max900:w-auto ${
        isFocus
          ? "pl-2 shadow-navLeft h-auto rounded-b-md bg-surface dark:bg-surfaceDark"
          : "pl-4 h-full"
      }`}
    >
      <div className="flex items-center w-full h-full py-2">
        <>
          {isFocus ? (
            <div
              className="flex items-center justify-center rounded-full w-9 h-9 hover:bg-white/10 text-secondaryIcon dark:text-secondaryIconDark"
              onClick={handleOutFocus}
            >
              <ArrowNavLeft />
            </div>
          ) : (
            <Link to={"/"}>
              <span className="text-primary">
                <LogoFB2 />
              </span>
            </Link>
          )}
        </>

        <div className="grow">
          <label className="flex ml-2">
            <span
              className={`${
                isFocus
                  ? "hidden"
                  : "flex items-center h-10 pl-3 rounded-l-full bg-black/5 dark:bg-white/10 text-secondaryIcon dark:text-secondaryIconDark max1260:w-10 max1260:rounded-r-full"
              }`}
              onClick={handleFocus}
            >
              <SearchNavLeft />
            </span>

            <input
              type="text"
              onFocus={handleFocus}
              placeholder="Tìm kiếm trên Facebook"
              value={searchText}
              onChange={handleSearchText}
              className={`${
                isFocus
                  ? "rounded-l-full pl-4"
                  : "rounded-l-none pl-2 max1260:hidden"
              } rounded-r-full w-full h-10 pr-2 pb-[9px] pt-[7px] bg-black/5 dark:bg-white/10 text-primaryText dark:text-primaryTextDark placeholder-black/70 dark:placeholder-white/70`}
            />
          </label>
        </div>
      </div>

      <div
        className={`${
          isFocus ? "block bg-surface dark:bg-surfaceDark w-80" : "hidden"
        }`}
      >
        <ListSearch list={searchList} onClose={() => setIsFocus(false)} />
      </div>
    </div>
  );
};

export default NavLeft;
