import { FC, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  tooltip: string;
}

const Tooltip: FC<Props> = (props): JSX.Element => {
  const { children, tooltip } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const tooltipRect = tooltipRef.current?.getBoundingClientRect();
    if (tooltipRef.current && containerRect && tooltipRect) {
      tooltipRef.current.style.top = containerRect.height + 3 + "px";
      tooltipRef.current.style.left =
        containerRect > tooltipRect
          ? `${-(containerRect.width - tooltipRect.width) * 0.5}` + "px"
          : `${-(tooltipRect.width - containerRect.width) * 0.5}` + "px";
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      ref={containerRef}
      className="relative inline-block h-full w-full not-coppy group"
    >
      {children}
      <span
        ref={tooltipRef}
        className="absolute p-2 rounded-md invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-secondaryIcon dark:bg-secondaryIconDark text-white dark:text-black text-1316 whitespace-nowrap transition-all z-[999]"
      >
        {tooltip}
      </span>
    </div>
  );
};
export default Tooltip;
