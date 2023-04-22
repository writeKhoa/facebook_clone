import { FindIcon } from "@/components/commons";
import { configMenuNavRight } from "@/configs";
import { ChangeEvent, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Menu = () => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div
      className="bg-surface dark:bg-surfaceDark rounded-lg"
      style={{ width: 360 }}
    >
      <div className="flex p-4 h-9 box-content">
        <div className="shrink-0 flex justify-center items-center rounded-l-full pl-2.5 w-4 bg-black/10 dark:bg-white/10 text-secondaryIcon dark:text-secondaryIconDark box-content">
          <FindIcon />
        </div>

        <input
          type="text"
          className="grow h-9 px-2 pb-1 bg-black/10 dark:bg-white/10 text-primaryText dark:text-primaryTextDark rounded-r-full"
          placeholder="Tìm kiếm trong menu"
          onChange={handleChange}
          value={searchText}
        />
      </div>

      <div className="px-2 -pb-4">
        {configMenuNavRight.map((item, index) => {
          const { list } = item;
          const newList = list.filter((item) => {
            return item.title.toLowerCase().includes(searchText);
          });
          if (newList.length <= 0) {
            return null;
          }

          return (
            <div
              key={index}
              className="pb-5 border-b border-divider dark:border-dividerDark"
            >
              <div className="text-1214 px-2 pb-2">
                <div className="pt-5 pb-1 px-2">
                  <span className="text-1720 text-primaryText dark:text-primaryTextDark font-medium">
                    {item.groupName}
                  </span>
                </div>
              </div>

              <div>
                {newList.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex px-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
                    >
                      <div className="shrink-0 my-2 mr-3">
                        <LazyLoadImage
                          src={item.srcImg}
                          width={36}
                          height={36}
                          className="rounded-full"
                        />
                      </div>

                      <div className="py-3">
                        <div className="flex flex-col -my-1 text-1214">
                          <div className="my-1">
                            <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
                              {item.title}
                            </span>
                          </div>
                          <div className="my-1 text-1214">
                            <span className="text-secondaryText dark:text-secondaryTextDark text-1316">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
