import { useState, FC, ReactNode } from "react";
import axiosClient, { makeRequestWithAccessToken } from "@/api";
import { payloadLogin, payloadRegister } from "@/models";
import { setWithExpiry, getWithExpiry, clearItem } from "@/utils";
import jwt_decode from "jwt-decode";
import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const loginBefore = getWithExpiry("wasLogged") ? true : false;
  const [accessToken, setAccessToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any | undefined | null>(undefined);
  const isReLogin = user === undefined && loginBefore;

  const register = async (payload: payloadRegister) => {
    try {
      await axiosClient.post("/api/v1/users/register", payload);
    } catch (error) {
      throw error;
    }
  };

  const login = async (payload: payloadLogin) => {
    try {
      const data: any = await axiosClient.post("/api/v1/users/login", payload, {
        withCredentials: true,
      });
      setAccessToken(data?.accessToken);
      setUser(data?.user);
      setWithExpiry("wasLogged", true, 60 * 60 * 1000 * 24 * 60);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const reLogin = async () => {
    try {
      setIsLoading(true);
      const data: any = await axiosClient.post("/api/v1/users/reLogin", {
        withCredentials: true,
      });
      setWithExpiry("wasLogged", true, 60 * 60 * 1000 * 24 * 60);
      setUser(data?.user);
      setAccessToken(data?.accessToken);
    } catch (error) {
      setUser(null);
      clearItem("wasLogged");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post("/api/v1/users/logout", { withCredentials: true });
      clearItem("wasLogged");
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const makeRequestWithAuth = async (
    method: "get" | "put" | "post" | "delete",
    url: string,
    payload: any
  ) => {
    try {
      const decoded: any = jwt_decode(accessToken);
      const d = new Date();
      let time = d.getTime();
      if (decoded.exp - 5 < time * 0.001) {
        const data: any = await axiosClient.post("/api/v1/users/newAccess");
        setAccessToken(data?.accessToken);
        makeRequestWithAccessToken(data?.accessToken);
        const newData = await axiosClient[method](url, payload);
        return newData;
      }
      makeRequestWithAccessToken(accessToken);
      const data = await axiosClient[method](url, payload);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    isLoading,
    isReLogin,
    register,
    login,
    reLogin,
    logout,
    makeRequestWithAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
