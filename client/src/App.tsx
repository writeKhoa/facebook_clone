import routes from "@/configs";
import { useAuth } from "@/hooks";
import DefaultLayout from "@/layouts";
import { Route as RouteModel } from "@/models";
import { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Route, Routes } from "react-router-dom";

function App() {
  const { reLogin, user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (localStorage.theme === "dark" && !!user) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    const checkReLogin = async () => {
      if (isLoading) {
        await reLogin();
        setIsLoading(false);
      }
    };
    checkReLogin();
  }, []);

  if (isLoading) {
    return <div className="w-full h-full bg-space dark:bg-spaceDark"></div>;
  }

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
