import { PostsStoreContext, PostsStoreContextProps } from "@/store";
import { useContext } from "react";

export const usePosts = () => {
  return useContext(PostsStoreContext) as PostsStoreContextProps;
};
