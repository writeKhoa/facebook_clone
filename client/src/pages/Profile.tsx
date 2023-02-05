import axiosClient from "@/api";
import {
  FriendProfile,
  NotFound,
  OtherProfile,
  OutletProfile,
  SelfProfile,
  ViewAsGuest,
} from "@/components/perpages/Profile";
import { useAuth } from "@/hooks";
import { PageProps } from "@/models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile: PageProps = () => {
  const {
    user: userLogin,
    makeRequestWithAuth,
    isLoading: isWaiting,
  } = useAuth();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [user, setUser] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [typeProfile, setTypeProfile] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        setIsLoading(true);
        if (userLogin) {
          const data = await makeRequestWithAuth(
            "get",
            `/api/v1/users/${id}`,
            {}
          );
          console.log("data ", data);
          setUser(data.user);
          setTypeProfile(data.type);
          if (!user) {
            setTitle("");
          }
        } else {
          const data: any = await axiosClient.get(`/api/v1/users/find/${id}`);
          setUser(data.user);
          setTypeProfile(data.type);
          if (!user) {
            setTitle("");
          }
        }
      } catch (error) {
        setTypeProfile("notfound");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    if (!isWaiting) {
      getProfile();
    }
    const controller = new AbortController();
    return () => controller.abort();
  }, [id]);

  useEffect(() => {
    if (title) {
      document.title = `${title} | Facebook`;
    } else {
      document.title = "Facebook";
    }
  }, [title]);

  if (isLoading) {
    return (
      <div className="w-full h-not-header bg-space dark:bg-spaceDark"></div>
    );
  }

  switch (typeProfile) {
    case "yourself":
      return (
        <>
          <SelfProfile user={user} />
          <OutletProfile />
        </>
      );
    case "other":
      return (
        <>
          <OtherProfile user={user} />
          <OutletProfile />
        </>
      );
    case "friend":
      return (
        <>
          <FriendProfile user={user} />
          <OutletProfile />
        </>
      );
    case "notlogin":
      return (
        <>
          <ViewAsGuest user={user} />
          <OutletProfile />
        </>
      );
    case "notfound":
      return (
        <>
          <NotFound />
        </>
      );
    default:
      return <></>;
  }
};

export default Profile;
