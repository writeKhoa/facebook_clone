import { useStateFriends } from "@/hooks/useStateFriends";
import { FC } from "react";
import {
  RequestAddFriend,
  RequestCancel,
  RequestIsFriend,
  RequestReceived,
} from "./sub";

interface Props {
  id: string;
}

// todo -1: notfound
// todo  0: view as guest
// todo  1: view as self profile
// todo  2: view as friend profile
// todo  3: view as request reveice
// todo  4: view as request sent
// todo  5: view as other profile

const Request: FC<Props> = ({ id }) => {
  const { selectId, list, onMakeFriend, onConfirm, onDelete, onCancelRequest } =
    useStateFriends();
  const item = !!list && list?.get(id);
  const isLoading = item?._id === selectId && item?.isLoading;

  return (
    <div className="mx-1 mt-2">
      {(() => {
        switch (item?.mode) {
          case 2:
            return <RequestIsFriend isLoading={isLoading} />;
          case 3:
            return (
              <RequestReceived
                isLoading={isLoading}
                onConfirm={() => onConfirm(id)}
                onDelete={() => onDelete(id)}
              />
            );
          case 4:
            return (
              <RequestCancel
                isLoading={isLoading}
                onCancel={() => onCancelRequest(id)}
              />
            );
          case 5:
            return (
              <RequestAddFriend
                isLoading={isLoading}
                onAdd={() => onMakeFriend(id)}
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
