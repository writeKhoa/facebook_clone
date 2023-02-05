import { NotifyNavRight } from "@/components/commons/Icons";
import { forwardRef } from "react";

interface Props {
  onOpen: () => void;
  isActive: boolean;
}

const NotifyItem = forwardRef<HTMLDivElement, Props>(
  ({ onOpen, isActive }, ref) => {
    return (
      <div className="ml-2 mt-2" ref={ref}>
        <div
          className={`relative flex justify-center items-center w-10 h-10 rounded-full ${
            isActive ? "bg-primary/20" : "bg-black/10 dark:bg-white/10"
          } cursor-pointer`}
          onClick={onOpen}
        >
          <div
            className={`flex justify-center items-center w-full h-full rounded-full ${
              isActive
                ? "text-primary"
                : "text-primaryIcon dark:text-primaryIconDark"
            } `}
          >
            <NotifyNavRight />
          </div>
        </div>
      </div>
    );
  }
);
export default NotifyItem;
