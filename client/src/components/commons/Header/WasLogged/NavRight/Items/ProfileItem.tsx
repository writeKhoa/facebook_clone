import { forwardRef } from "react";
import { useAuth } from "@/hooks";

interface Props {
  onOpen: () => void;
}

const ProfileItem = forwardRef<HTMLDivElement, Props>(({ onOpen }, ref) => {
  const { user } = useAuth();
  return (
    <div className="ml-2 mt-2" ref={ref}>
      <div
        className="relative flex justify-center items-center w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 text-primaryIcon dark:text-primaryIconDark group cursor-pointer"
        onClick={onOpen}
      >
        <div className="flex justify-center items-center w-full h-full rounded-full">
          <img src={user?.avatarUrl} alt="avatar" className="rounded-full" />
        </div>
      </div>
    </div>
  );
});
export default ProfileItem;
