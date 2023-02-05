import { useCallback } from "react";

export const useLockScroll = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.paddingRight = `-${scrollBarCompensation}px`;
  }, []);

  return { lockScroll, unlockScroll };
};
