import { useEffect, RefObject } from "react";

export function useClickOutside(
  componentRefs: RefObject<HTMLElement | null>[],
  callback: () => void,
  dependencies: any[]
) {
  useEffect(() => {
    const handleClick = (e: any) => {
      let isOutside = true;

     
      componentRefs.some((componentRef) => {
        if (
          componentRef.current === null ||
          componentRef.current.contains(e.target)
        ) {
          isOutside = false;
          return;
        }
      });

      if (isOutside) callback();
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [...dependencies]);
}
