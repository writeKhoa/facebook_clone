import { Route, Routes } from "react-router-dom";
import routeOutletFriends from "../configs/config.outlet.friends";


const OutletFriends = () => {
  return (
    <>
      <Routes>
        {routeOutletFriends.map((component, index) => {
          const { path, Component } = component;
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Routes>
    </>
  );
};

export default OutletFriends;
