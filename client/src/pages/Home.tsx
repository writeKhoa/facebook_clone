import { PageProps } from "@/models";
import {
  Main,
  Complementary,
  HomeNavigation,
} from "@/components/perpages/Home";
import { useEffect } from "react";

const Home: PageProps = () => {
  useEffect(() => {
    document.title = "Facebook";
  }, []);
  return (
    <div className="flex relative bg-space dark:bg-spaceDark">
      <div className="sticky top-14 left-0 shrink basis-[360px] min-w-[280px] h-notHeader  overflow-y-auto max1075:hidden group transition-all secondary-scrollbar">
        <HomeNavigation />
      </div>

      <div className="mx-auto grow basis-[744px]">
        <div className="w-full px-8 mx-auto py-2">
          <Main />
        </div>
      </div>

      <div className="sticky top-14 right-0 shrink basis-[360px] min-w-[280px] h-notHeader max900:hidden overflow-y-auto secondary-scrollbar">
        <Complementary />
      </div>
    </div>
  );
};
export default Home;
