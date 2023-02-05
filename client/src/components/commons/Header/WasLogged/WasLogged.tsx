import NavLeft from "./NavLeft";
import NavMid from "./NavMid";
import NavRight from "./NavRight";

const WasLogged = () => {
  return (
    <div className="relative w-full h-full border-b border-divider dark:border-dividerDark bg-surface dark:bg-surfaceDark">
      <div className="absolute top-0 left-0 z-50">
        <NavLeft />
      </div>
      <div className="abosolute top-0 left-0 flex justify-center w-full h-full max700:hidden">
        <NavMid />
      </div>
      <div className="absolute top-0 right-0 z-20 h-full">
        <NavRight />
      </div>
    </div>
  );
};

export default WasLogged;
