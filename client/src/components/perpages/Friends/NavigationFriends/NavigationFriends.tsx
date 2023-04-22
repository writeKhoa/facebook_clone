import { Route, Routes } from "react-router-dom";
import routeNavFriends from "../configs/config.nav.friends";

const NavigationFriends = () => {
  return (
    <div className="fixed top-14 left-0 w-[360px] h-notHeader border-r-0  dark:border-r border-divider dark:border-dividerDark bg-surface dark:bg-surfaceDark">     
      <Routes>
        {routeNavFriends.map((component, index) => {
          const { path, Component } = component;
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Routes>
    </div>
  );
};

export default NavigationFriends;
