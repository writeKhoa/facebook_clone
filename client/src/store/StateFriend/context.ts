import { createContext } from "react";

export interface FriendStateItem {
  _id: string;
  fullName: string;
  avatarUrl: string;
  mode: number;

  isLoading: boolean;

  isConfirm: boolean;
  isDelete: boolean;

  isAdd: boolean;
  isRemove: boolean;
}

export interface StateFriendsContext {
  selectId: string;
  list: Map<string, FriendStateItem>;
  onInit: (list: FriendStateItem[], mode: number) => void;
  onSelect: (id: string) => void;
  onMakeFriend: (id: string) => Promise<void>;
  onRemoveSuggest: (id: string) => Promise<void>;
  onConfirm: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onCancelRequest: (id: string) => Promise<void>;
}

const FriendStateContext = createContext<StateFriendsContext | null>(null);

export { FriendStateContext };
