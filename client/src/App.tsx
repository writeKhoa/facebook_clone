import routes from "@/configs";
import { useAuth } from "@/hooks";
import DefaultLayout from "@/layouts";
import { Route as RouteModel } from "@/models";
import { useLayoutEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Route, Routes } from "react-router-dom";

function App() {
  const { reLogin, isReLogin, user } = useAuth();

  if (localStorage.theme === "dark" && !!user) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  useLayoutEffect(() => {
    const checkReLogin = async () => {
      if (isReLogin) {
        await reLogin();
      }
    };
    checkReLogin();
  }, []);

  return (
    <>
      <MobileView>
        <h1>Application not support for mobile, please use PC!</h1>
      </MobileView>

      <BrowserView>
        <Routes>
          {routes.map((route: RouteModel, index: number) => {
            const { Page, path, isPrivate } = route;
            return (
              <Route
                path={path}
                key={index}
                element={
                  <DefaultLayout isPrivate={isPrivate}>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </BrowserView>
    </>
  );
}

export default App;
