import {
  NewCallIcon,
  SearchIcon, ThreeDotIcon
} from "@/components/commons/Icons";
import { ItemFriend } from "./ItemFriend";

const Complementary = () => {
  const friends = [
    {
      fullName: "Minh Tâm",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Hữu Bằng",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Vũ Gia",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Thành Hải",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Phan Hoa",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Yến Nhi",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Nhật Thắm",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Lưu Quyết Thắng",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Đào Minh Khoa",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Gia Uyên",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Nguyễn Thanh Tùng",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Võ Thiên Tài",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Diễm Trần",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Huân Quách",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      fullName: "Minh Tâm",
      avatarUrl: "https://via.placeholder.com/150/d32776",
    },
  ];
  return (
    <div className="overflow-y-auto">
      <div className="flex items-center pt-5 pb-1 px-4">
        <div className="grow">
          <h3>
            <span className="text-1720 font-600 text-secondaryText dark:text-secondaryTextDark">
              Người liên hệ
            </span>
          </h3>
        </div>
        <div className="shrink-0 flex">
          <div className="flex items-center justify-center w-8 h-8 mx-1 rounded-full text-primaryIcon dark:text-primaryIconDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
            <span>
              <NewCallIcon />
            </span>
          </div>
          <div className="flex items-center justify-center w-8 h-8 mx-1 rounded-full text-primaryIcon dark:text-primaryIconDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
            <SearchIcon />
          </div>
          <div className="flex items-center justify-center w-8 h-8 mx-1 rounded-full text-primaryIcon dark:text-primaryIconDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
            <span>
              <ThreeDotIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="py-2">
        {friends.map((friend, index) => {
          const { fullName, avatarUrl } = friend;
          return (
            <ItemFriend key={index} fullName={fullName} avatarUrl={avatarUrl} />
          );
        })}
      </div>
    </div>
  );
};

export default Complementary;
