import { createContext } from "react";
import { payloadRegister, payloadLogin } from "@/models";

export interface AuthContextProps {
  user: any;
  isLoading: boolean;
  isReLogin: boolean;
  register: (data: payloadRegister) => Promise<void>;
  login: (data: payloadLogin) => Promise<void>;
  reLogin: () => Promise<void>;
  logout: () => Promise<void>;
  makeRequestWithAuth: (
    method: "get" | "post" | "put" | "delete",
    url: string,
    payload: any
  ) => Promise<any>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);


