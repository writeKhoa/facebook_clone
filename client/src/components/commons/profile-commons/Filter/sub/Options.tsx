import { ArrowDownIcon, Modal } from "@/components/commons";
import CustomScrollbar from "@/components/commons/CustomScrollbar";
import { MarkIcon } from "@/components/commons/Icons/EditorState.Icon";
import { useClickOutside } from "@/hooks";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  list: any[];
  value: any;
  onChange: any;
}

const Options: FC<Props> = ({ list, value, onChange }) => {
  const [isShowOption, setIsShowOption] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const timeRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleShowOption = () => setIsShowOption((pre) => !pre);
  const handleSelectOption = () => {
    setIsShowOption(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (timeRef.current) {
        const rect = timeRef.current.getBoundingClientRect();
        setPosition({ x: rect.x, y: rect.y + rect.height });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [timeRef]);

  useClickOutside([modalRef, timeRef], () => setIsShowOption(false), []);
  return (
    <div className="relative inline-block" ref={timeRef}>
      <div
        className="inline-block px-3 py-2.5 h-9 rounded-md bg-black/20 dark:bg-white/20 text-1214 cursor-pointer"
        onClick={handleShowOption}
      >
        <div className="-my-1">
          <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
            {value.label}
            <span className="ml-1">
              <ArrowDownIcon />
            </span>
          </span>
        </div>
      </div>
      {isShowOption && (
        <Modal isOpen={isShowOption} wrapperId="time">
          <div
            className="fixed p-2 w-96 h-72 rounded-lg bg-surface dark:bg-surfaceDark my-boxshadow z-30"
            style={{ left: position.x, top: position.y }}
            ref={modalRef}
          >
            <CustomScrollbar>
              {list.map((item) => {
                return (
                  <div
                    key={item.label}
                    className={`${
                      value.value === item.value
                        ? "border-4 border-primary"
                        : ""
                    } rounded-lg`}
                  >
                    <div
                      className={`${
                        value.value === item.value
                          ? "h-12 border-2 border-white "
                          : "h-9"
                      } rounded py-2.5 px-3 cursor-pointer bg-surface dark:bg-surfaceDark hover:bg-black/20 dark:hover:bg-white/20`}
                      onClick={() => {
                        handleSelectOption();
                        onChange(item);
                      }}
                    >
                      <div className="-my-1 flex justify-between">
                        <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
                          {item.label}
                        </span>
                        {value.value === item.value && (
                          <span>
                            <MarkIcon />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </CustomScrollbar>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Options;
