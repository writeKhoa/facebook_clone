import { PageProps } from "@/models";
import { useEffect, useRef, useState } from "react";
import { SettingIcon, ActivityLogIcon } from "@/components/commons";

const Watch: PageProps = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter(): void {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowPopup(true);
  }

  function handleMouseLeave(): void {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 1500);
  }

  const [hoverTimeout, setHoverTimeout] = useState<any>();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter1 = () => {
    clearTimeout(hoverTimeout);
    setHoverTimeout(
      setTimeout(() => {
        setShowPopup(true);
      }, 1500)
    );
  };

  const handleMouseLeave1 = () => {
    clearTimeout(hoverTimeout);
    setHoverTimeout(
      setTimeout(() => {
        setShowPopup(false);
      }, 1500)
    );
  };
  useEffect(() => {
    document.title = "Watch | Facebook";
  }, []);
  return (
    <div className="w-screen h-notHeader bg-space dark:bg-spaceDark text-primaryText dark:text-primaryTextDark">
      <div className="h-20">
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Hover me!
        </button>
        {showPopup && (
          <div className="popup">
            Popup content <ActivityLogIcon />
          </div>
        )}
      </div>

      <SettingIcon />
      <ActivityLogIcon />

      <div className="mt-10">
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          Hover me!
        </button>
        {showPopup && (
          <div
            style={{
              position: "absolute",
              top: buttonRef.current?.getBoundingClientRect().bottom,
              left: buttonRef.current?.getBoundingClientRect().left,
              backgroundColor: "lightgray",
              padding: "10px",
            }}
          >
            This is a popup!
          </div>
        )}
      </div>
    </div>
  );
};
export default Watch;
