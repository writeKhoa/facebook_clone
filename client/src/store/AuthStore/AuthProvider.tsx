import { useState, FC, ReactNode } from "react";
import axiosClient, { makeRequestWithAccessToken } from "@/api";
import { payloadLogin, payloadRegister } from "@/models";
import { setWithExpiry, getWithExpiry, clearItem } from "@/utils";
import jwt_decode from "jwt-decode";
import { AuthContext } from "./AuthContext";
import { User } from "@/models";

interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>("");

  const [user, setUser] = useState<User | undefined>(undefined);
  const isReLogin = getWithExpiry("isLogged") ? true : false;

  const register = async (payload: payloadRegister) => {
    try {
      await axiosClient.post("/api/v1/users/register", payload);
    } catch (error) {
      throw error;
    }
  };

  const login = async (payload: payloadLogin) => {
    try {
      const { data } = await axiosClient.post("/api/v1/users/login", payload, {
        withCredentials: true,
      });
      setAccessToken(data?.__accessToken);
      setUser(data?.__user);
      setWithExpiry("isLogged", true, 60 * 60 * 1000 * 24 * 60);
    } catch (error) {
      throw error;
    }
  };

  const reLogin = async () => {
    try {
      if (isReLogin) {
        const { data } = await axiosClient.post("/api/v1/users/reLogin", {
          withCredentials: true,
        });
        setWithExpiry("isLogged", true, 60 * 60 * 1000 * 24 * 60);
        setUser(data?.__user);
        setAccessToken(data?.__accessToken);
      }
    } catch (error) {
      setUser(undefined);
      clearItem("isLogged");
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post("/api/v1/users/logout", { withCredentials: true });
      clearItem("isLogged");
      setUser(undefined);
    } catch (error) {
      throw error;
    }
  };

  const makeRequestWithAuth = async (
    method: "get" | "put" | "post" | "delete",
    url: string,
    payload: any,
    signal: any
  ) => {
    try {
      const decoded: any = jwt_decode(accessToken);
      const d = new Date();
      let time = d.getTime();
      if (decoded.exp - 10 < time * 0.001) {
        const { data } = await axiosClient.post("/api/v1/users/newAccess");
        setAccessToken(data?.__accessToken);
        makeRequestWithAccessToken(data?.__accessToken);
        const { data: newData } = await axiosClient[method](url, payload);
        return newData;
      }
      makeRequestWithAccessToken(accessToken);
      if (method === "get") {
        const { data } = await axiosClient[method](url, signal);
        return data;
      } else {
        const { data } = await axiosClient[method](url, payload, signal);
        return data;
      }
    } catch (error) {
      throw error;
    }
  };

  const onChangeAvatar = (avatarUrl: string, mediumAvatarUrl: string) => {
    // @ts-ignore
    setUser((pre) => {
      return {
        ...pre,
        avatarUrl,
        mediumAvatarUrl,
      };
    });
  };

  const value = {
    user,
    register,
    login,
    reLogin,
    onChangeAvatar,
    logout,
    makeRequestWithAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
