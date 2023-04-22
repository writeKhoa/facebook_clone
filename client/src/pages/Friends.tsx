import { PageProps } from "@/models";
import PageFriends from "@/components/perpages/Friends";
import { useEffect } from "react";

const Friends: PageProps = () => {
  useEffect(() => {
    document.title = "Bạn bè | Facebook";
  }, []);
  return <PageFriends />;
};

export default Friends;
