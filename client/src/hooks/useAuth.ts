import { AuthContext, AuthContextProps } from "@/store";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextProps;
};
