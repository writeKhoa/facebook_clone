import axiosClient from "@/api";
import {
  NotFound,
  OtherProfile,
  SelfProfile,
  ViewAsGuest,
} from "@/components/perpages/Profile";
import { useAuth } from "@/hooks";
import { PageProps, ProfileProps } from "@/models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile: PageProps = () => {
  const { user, makeRequestWithAuth } = useAuth();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<number>(-99);

  useEffect(() => {
    const abortController: AbortController | null = new AbortController();
    const getProfile = async () => {
      try {
        setIsLoading(true);
        if (user) {
          const data = await makeRequestWithAuth(
            "get",
            `/api/v1/users/find-with-auth/${id}`
          );
          setProfile(data.__user);
          setMode(data.__mode);
          if (!user) {
            setTitle("");
          }
        } else {
          const data: any = await axiosClient.get(`/api/v1/users/find/${id}`);
          setProfile(data.__user);
          setMode(data.__mode);
          if (!user) {
            setTitle("");
          }
        }
      } catch (error) {
        setMode(-1);
        setProfile(null);
      } finally {
        setIsLoading(false);
      }
    };

    getProfile();
    return () => {
      abortController.abort();
    };
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

  switch (mode) {
    case -1:
      return <NotFound />;
    case 0:
      return <ViewAsGuest user={profile as ProfileProps} />;
    case 1:
      return <SelfProfile user={profile as ProfileProps} />;
    case -99:
      return <div className="w-full h-full bg-space dark:bg-spaceDark"></div>;
    default:
      return <OtherProfile profile={profile as ProfileProps} mode={mode} />;
  }
};

export default Profile;
