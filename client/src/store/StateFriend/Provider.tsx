import { useAuth } from "@/hooks";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { FriendStateContext } from "./context";
import { FriendStateItem } from "./context";
import { wait } from "@/utils";

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const { makeRequestWithAuth } = useAuth();
  const [list, setList] = useState<Map<string, FriendStateItem>>();
  const [selectId, setSelectId] = useState<string>("");

  const onInit = (listInit: FriendStateItem[], mode: number) => {
    const newList = new Map<string, FriendStateItem>();
    listInit.forEach((item) => {
      newList.set(item._id, {
        ...item,
        mode,
        isLoading: false,
        isConfirm: false,
        isDelete: false,
        isRemove: false,
        isAdd: false,
      });
    });

    setList(newList);
    setSelectId("");
  };

  // todo FINISH
  const onSelect = (id: string) => {
    setSelectId(id);
  };

  // todo FINISH
  const onMakeFriend = async (id: string) => {
    try {
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isLoading: true,
          isAdd: true,
          mode: 4,
        });
        setList(newList);
      }
      await makeRequestWithAuth("post", "/api/v1/friends/make-friend", {
        userReceivedId: id,
      });
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isAdd: true,
          mode: 4,
          isLoading: false,
        });
        setList(newList);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  // todo FINISH
  const onRemoveSuggest = async (id: string) => {
    try {
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isRemove: true,
        });
        setList(newList);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  // todo FINISH
  const onCancelRequest = async (id: string) => {
    try {
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isLoading: true,
          isAdd: false,
          mode: 5,
        });
        setList(newList);
      }
      await makeRequestWithAuth(
        "post",
        "/api/v1/friends/cancel-request-make-friend",
        {
          userReceivedId: id,
        }
      );
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isLoading: false,
          isAdd: false,
          mode: 5,
        });
        setList(newList);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  // todo DONGING
  const onConfirm = async (id: string) => {
    try {
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isLoading: true,
          isConfirm: true,
          mode: 2,
        });
        setList(newList);
      }
      await makeRequestWithAuth(
        "post",
        "/api/v1/friends/confirm-request-make-friend",
        {
          userSentId: id,
        }
      );
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isLoading: false,
          isConfirm: true,
          mode: 2,
        });
        setList(newList);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  // todo DONGING
  const onDelete = async (id: string) => {
    try {
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isLoading: true,
          isDelete: true,
          mode: 5,
        });
        setList(newList);
      }
      await makeRequestWithAuth(
        "post",
        "/api/v1/friends/deny-request-make-friend",
        {
          userSentId: id,
        }
      );
      if (list?.has(id)) {
        const item = list?.get(id) as FriendStateItem;
        const newList = new Map(list);
        newList.set(id, {
          ...item,
          isLoading: false,
          isDelete: true,
          mode: 5,
        });
        setList(newList);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const value = {
    list,
    selectId,
    onInit,
    onSelect,
    onMakeFriend,
    onRemoveSuggest,
    onCancelRequest,
    onConfirm,
    onDelete,
  };
  return (
    //@ts-ignore
    <FriendStateContext.Provider value={value}>
      {children}
    </FriendStateContext.Provider>
  );
};

export default Provider;
