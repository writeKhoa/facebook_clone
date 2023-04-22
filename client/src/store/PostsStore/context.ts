import { PostProps } from "@/models";
import { createContext } from "react";
import { PostCreateProps, PostEditProps } from "@/models";

export interface PostsStoreContextProps {
  posts: PostProps[];
  pinPost: PostProps | null;
  postCreate: PostCreateProps;
  isOpenEditor: boolean;
  pinPostId: string;
  modeEditor: "edit" | "create";
  postEdit: PostEditProps;
  editPostId: string;
  formActive: "default" | "tag" | "feeling" | "audiance" | "defaultAndImage";
  setFormActive: React.Dispatch<
    React.SetStateAction<
      "default" | "tag" | "feeling" | "audiance" | "defaultAndImage"
    >
  >;
  setPinPostId: React.Dispatch<React.SetStateAction<string>>;
  setPinPost: React.Dispatch<React.SetStateAction<PostProps | null>>;
  setEditPostId: React.Dispatch<React.SetStateAction<string>>;
  setPosts: React.Dispatch<React.SetStateAction<PostProps[]>>;
  setPostCreate: React.Dispatch<React.SetStateAction<PostCreateProps>>;
  setModeEditor: React.Dispatch<React.SetStateAction<"edit" | "create">>;
  setPostEdit: React.Dispatch<React.SetStateAction<PostEditProps>>;
  setIsOpenEditor: React.Dispatch<React.SetStateAction<boolean>>;

  onResetPostCreate: () => void;
  onResetPostEdit: () => void;
}

const PostsStoreContext = createContext<PostsStoreContextProps | null>(null);

export { PostsStoreContext };
