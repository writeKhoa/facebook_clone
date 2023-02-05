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
      <div className="sticky top-14 left-0 grow w-full h-notHeader min-w-[280px] max-w-[360px] overflow-y-auto max1075:hidden group transition-all secondary-scrollbar">
        <HomeNavigation />
      </div>

      <div className="mx-auto grow">
        <div className="w-full px-8 mx-auto max1260:px-0">
          <Main />
        </div>
      </div>

      <div className="sticky top-14 right-0 grow h-notHeader min-w-[280px] max-w-[360px] max900:hidden overflow-y-auto secondary-scrollbar">
        <Complementary />
      </div>
    </div>
  );
};
export default Home;
