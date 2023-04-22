import { ComposerImg } from "@/assets/images";
import { ArrowLeftIcon } from "@/components/commons/Icons/EditorState.Icon";
import { backgrounds } from "@/configs";
import { usePosts } from "@/hooks";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { EmojiPicker } from "../../plugins";

const BackgroundComposer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { modeEditor, postCreate, postEdit, setPostCreate, setPostEdit } =
    usePosts();

  const postActive = modeEditor === "edit" ? postEdit : postCreate;

  const handleOpen = () => setIsOpen((pre) => !pre);

  const handleChange = (format: 1 | 2, background: number) => {
    if (modeEditor === "edit") {
      setPostEdit((pre) => {
        return {
          ...pre,
          format,
          background,
        };
      });
    } else {
      setPostCreate((pre) => {
        return {
          ...pre,
          format,
          background,
        };
      });
    }
  };
  return (
    <div className="absolute left-0 bottom-0 flex w-full px-4 pb-3">
      <div className="flex justify-between items-center w-full">
        <div className="grow flex">
          <div onClick={handleOpen} className="cursor-pointer">
            {isOpen ? (
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-black/20 dark:bg-white/20">
                <ArrowLeftIcon />
              </div>
            ) : (
              <LazyLoadImage
                width={38}
                height={38}
                src={ComposerImg}
                alt="composer"
              />
            )}
          </div>
          <div className="flex px-2 -mx-1">
            {isOpen ? (
              <>
                {backgrounds.map((item, index) => {
                  if (item.format === 2) {
                    if (item.type === "image") {
                      const background = item.srcBtn;
                      return (
                        <div
                          key={index}
                          onClick={() => handleChange(item.format, index)}
                        >
                          <LazyLoadImage
                            className={`w-8 h-8 cursor-pointer rounded-md mx-1 ${
                              postActive.background === index
                                ? "border-2 border-white"
                                : ""
                            }`}
                            src={background}
                          />
                        </div>
                      );
                    } else {
                      const color = item.color;
                      return (
                        <div
                          key={index}
                          onClick={() => handleChange(item.format, index)}
                          className={`${
                            postActive.background === index
                              ? "border-2 border-white"
                              : ""
                          } w-8 h-8 cursor-pointer rounded-md mx-1`}
                          style={{
                            backgroundColor: `${color}`,
                          }}
                        ></div>
                      );
                    }
                  }
                  return (
                    <div
                      key={index}
                      onClick={() => handleChange(item.format, index)}
                      className={`${
                        postActive.background === index
                          ? "border-2 border-white"
                          : ""
                      } w-8 h-8 border-space dark:bg-spaceDark rounded-md mx-1 cursor-pointer`}
                    ></div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>

        <div className="shrink-0">
          <EmojiPicker />
        </div>
      </div>
    </div>
  );
};

export default BackgroundComposer;
