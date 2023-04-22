import { useAuth } from "@/hooks";
import { FC, useState } from "react";
import {
  RequestAddFriend,
  RequestCancel,
  RequestIsFriend,
  RequestReceived,
} from "./sub";

interface Props {
  id: string;
  mode: number;
}

import { wait } from "@/utils";

// todo -1: notfound
// todo  0: view as guest
// todo  1: view as self profile
// todo  2: view as friend profile
// todo  3: view as request reveice
// todo  4: view as request sent
// todo  5: view as other profile

const Request: FC<Props> = ({ id, mode }) => {
  const { makeRequestWithAuth } = useAuth();

  const [modeProfile, setModeProfile] = useState<number>(mode);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConfirm = async (id: string) => {
    try {
      setIsLoading(true);
      setModeProfile(2);
      await makeRequestWithAuth(
        "post",
        "/api/v1/friends/confirm-request-make-friend",
        {
          userSentId: id,
        }
      );
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true);
      setModeProfile(5);
      await makeRequestWithAuth(
        "post",
        "/api/v1/friends/deny-request-make-friend",
        {
          userSentId: id,
        }
      );
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelRequest = async (id: string) => {
    try {
      setIsLoading(true);
      setModeProfile(5);
      await makeRequestWithAuth(
        "post",
        "/api/v1/friends/cancel-request-make-friend",
        {
          userReceivedId: id,
        }
      );
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMakeFriend = async (id: string) => {
    try {
      setIsLoading(true);
      setModeProfile(4);
      await makeRequestWithAuth("post", "/api/v1/friends/make-friend", {
        userReceivedId: id,
      });
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnFriend = async (id: string) => {
    try {
      setIsLoading(true);
      setModeProfile(5);
      await makeRequestWithAuth("post", "/api/v1/friends/unfriend", {
        friendId: id,
      });
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-1 mt-2">
      {(() => {
        switch (modeProfile) {
          case 2:
            return (
              <RequestIsFriend
                isLoading={isLoading}
                onUnFriend={() => handleUnFriend(id)}
              />
            );
          case 3:
            return (
              <RequestReceived
                isLoading={isLoading}
                onConfirm={() => handleConfirm(id)}
                onDelete={() => handleDelete(id)}
              />
            );
          case 4:
            return (
              <RequestCancel
                isLoading={isLoading}
                onCancel={() => handleCancelRequest(id)}
              />
            );
          case 5:
            return (
              <RequestAddFriend
                isLoading={isLoading}
                onAdd={() => handleMakeFriend(id)}
              />
            );
          default:
            return <></>;
        }
      })()}
    </div>
  );
};

export default Request;
