import { Modal } from "@/components/commons";
import { ChooseEmojiIcon } from "@/components/commons/Icons";
import { emojiConfig } from "@/configs";
import { useClickOutside, useWindowSize } from "@/hooks";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { INSERT_EMOJI_COMMAND } from "./EmojiPlugin";

const EmojiPicker = () => {
  const [editor] = useLexicalComposerContext();
  const windowSize = useWindowSize();

  const [isOpenPickerEmoji, setIsOpenPickerEmoji] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const toggleOpenRef = useRef<HTMLDivElement>(null);
  const pickerEmojiRef = useRef<HTMLDivElement>(null);

  const handleCreateEmoji = (emoji: string, index: number) => {
    editor.dispatchCommand(INSERT_EMOJI_COMMAND, { emoji, index });
  };

  const handleOpen = () => setIsOpenPickerEmoji((pre) => !pre);
  useClickOutside([toggleOpenRef, pickerEmojiRef], handleOpen, []);
  useEffect(() => {
    const handleResize1 = () => {
      if (toggleOpenRef.current) {
        const toggleRect = toggleOpenRef.current.getBoundingClientRect();
        setPosition({
          x: toggleRect.x - 100,
          y: windowSize.height - toggleRect.top + 10,
        });
      }
    };
    handleResize1();
    window.addEventListener("resize", handleResize1);
    return () => {
      window.removeEventListener("resize", handleResize1);
    };
  }, [toggleOpenRef.current, windowSize]);

  return (
    <div className="relative">
      <div onClick={handleOpen} className="cursor-pointer" ref={toggleOpenRef}>
        <ChooseEmojiIcon />
      </div>
      {isOpenPickerEmoji && (
        <Modal
          wrapperId="emoji-picker"
          isOpen={isOpenPickerEmoji}
          disabledOverflow={isOpenPickerEmoji}
        >
          <div
            ref={pickerEmojiRef}
            className="fixed z-[100]"
            style={{ left: position.x, bottom: position.y }}
          >
            <div className="grid grid-cols-5 bg-surface dark:bg-surfaceDark rounded-lg my-boxshadow p-1">
              {emojiConfig.map((item, index) => {
                return (
                  <div
                    className="flex justify-center w-9 h-9 mx-0.5"
                    onClick={() => handleCreateEmoji(item.title, index)}
                    key={index}
                  >
                    <LazyLoadImage
                      className="w-7 h-7 cursor-pointer"
                      src={item.src}
                      alt={item.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EmojiPicker;
