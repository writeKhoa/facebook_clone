import { useEffect, RefObject } from "react";

export function useClickOutside(
  componentRef: RefObject<HTMLElement | null>,
  callback: () => void,
  dependencies: any[]
) {
  useEffect(() => {
    const handleClick = (e: any) => {
      if (
        componentRef.current === null ||
        componentRef.current.contains(e.target)
      ) {
        return;
      } else {
        callback();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [...dependencies]);
}
