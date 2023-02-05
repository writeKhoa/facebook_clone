import { useEffect } from "react";

export const useHandleScrollAtBottom = (
  handleScrollToBottom: () => Promise<void>,
  distanceActive = 1,
  dependencies: any[]
) => {
  useEffect(() => {
    const handleScroll = async (e: any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + distanceActive >= scrollHeight) {
        await handleScrollToBottom();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [...dependencies]);
};
