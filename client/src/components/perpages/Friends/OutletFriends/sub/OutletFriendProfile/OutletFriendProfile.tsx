import { EmptyPeople, OtherProfile } from "./sub";
import { useAuth, useStateFriends } from "@/hooks";
import { ProfileProps } from "@/models";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FriendOutlet = () => {
  const location = useLocation();
  const { makeRequestWithAuth } = useAuth();
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const { onSelect } = useStateFriends();
  const [mode, setMode] = useState<number>(0);

  useEffect(() => {
    const abortController: AbortController | null = new AbortController();

    const getData = async () => {
      try {
        const id = location.pathname.split("/")[3];
        if (!!id && typeof id === "string") {
          onSelect(id);
          const data = await makeRequestWithAuth(
            "get",
            `/api/v1/users/find-with-auth/${id}`,
            {},
            { signal: abortController.signal }
          );
          setProfile({ ...data.__user });
          setMode(data.__mode);
        }
      } catch (error) {
        console.log({ error });
      }
    };

    getData();
    return () => {
      abortController.abort();
    };
  }, [location]);
  return (
    <>
      {!!profile ? (
        <OtherProfile profile={profile} mode={mode} />
      ) : (
        <EmptyPeople />
      )}
    </>
  );
};

export default FriendOutlet;
