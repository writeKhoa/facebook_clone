import { createContext } from "react";
import { payloadRegister, payloadLogin, User } from "@/models";

export interface AuthContextProps {
  user: User | undefined;
  register: (data: payloadRegister) => Promise<void>;
  login: (data: payloadLogin) => Promise<void>;
  reLogin: () => Promise<void>;
  logout: () => Promise<void>;
  makeRequestWithAuth: (
    method: "get" | "post" | "put" | "delete",
    url: string,
    payload?: any,
    signal?: any
  ) => Promise<any>;
  onChangeAvatar: (avatarUrl: string, mediumAvatarUrl: string) => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export { AuthContext };
