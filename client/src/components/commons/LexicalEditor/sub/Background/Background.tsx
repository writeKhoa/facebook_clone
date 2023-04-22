import { backgrounds } from "@/configs";
import { usePosts } from "@/hooks";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FC, ReactNode } from "react";
import { Background2Props } from "@/models";

interface Props {
  children: ReactNode;
  isOpenAddImage: boolean;
}

const Background: FC<Props> = ({ children, isOpenAddImage }) => {
  const { postCreate, postEdit, modeEditor } = usePosts();
  const postActive = modeEditor === "edit" ? postEdit : postCreate;
  const [editor] = useLexicalComposerContext();
  const handleFocus = () => editor.focus();

  if (backgrounds[postActive?.background].format === 2) {
    const background = (backgrounds[postActive?.background] as Background2Props)
      ?.srcBg;
    const color = (backgrounds[postActive?.background] as Background2Props)
      ?.color;
    if (!!background) {
      return (
        <div
          className="relative flex justify-center items-center text-center"
          style={{
            backgroundImage: `url(${background})`,
            height: `calc(500px * 0.66)`,
            color: `${
              (backgrounds[postActive.background] as Background2Props)
                ?.theme === "dark"
                ? "white"
                : "black"
            }`,
          }}
          onClick={handleFocus}
        >
          {children}
        </div>
      );
    }
    if (color) {
      return (
        <div
          className="relative flex justify-center items-center text-center"
          style={{
            backgroundColor: `${color}`,
            height: `calc(500px * 0.66)`,
            color: `${
              (backgrounds[postActive.background] as Background2Props).theme ===
              "dark"
                ? "white"
                : "black"
            }`,
          }}
          onClick={handleFocus}
        >
          {children}
        </div>
      );
    }
  }

  return (
    <div
      className={`relative text-primaryText dark:text-primaryTextDark ${
        isOpenAddImage ? "min-h-[40px]" : "h-full"
      }`}
      onClick={handleFocus}
    >
      {children}
    </div>
  );
};

export default Background;
