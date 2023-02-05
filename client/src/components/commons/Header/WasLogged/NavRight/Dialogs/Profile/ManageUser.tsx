import { FC } from "react";
import { useAuth } from "@/hooks";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/commons";

interface Props {
  handleClose: () => void;
}
export const ManageUser: FC<Props> = ({ handleClose }) => {
  const { user } = useAuth();
  return (
    <div className="mt-1 mx-4 mb-4 rounded-md shadow">
      <div>
        <Link
          onClick={handleClose}
          to={`/${user._id}`}
          className="block my-2 px-1 pt-2 mx-1"
        >
          <div className="flex items-center p-2 -m-1 hover:bg-black/10 dark:hover:bg-white/10 hover:rounded-md">
            <div className="p-1">
              <img
                src={user?.avatarUrl}
                alt="avatar"
                className="w-9 h-9 rounded-full"
              />
            </div>
            <div className="p-1 grow">
              <span className="text-1720 font-semibold text-primaryText dark:text-primaryTextDark">
                {`${user?.firstName} ${user?.surnName}`}
              </span>
            </div>
          </div>
        </Link>

        <hr className="h-[0px] border-b-black/60 dark:border-b-white/60 mx-4" />

        <div className="my-1 mx-1 pb-1">
          <div className="px-2 py-1 hover:bg-black/10 dark:hover:bg-white/10 hover:rounded-md cursor-pointer">
            <span className="text-1520 font-medium text-primaryBtnBg">
              Xem tất cả trang cá nhân
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
