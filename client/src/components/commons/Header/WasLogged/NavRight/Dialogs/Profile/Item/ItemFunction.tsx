import { FC } from "react";
import { useAuth } from "@/hooks";
import { useNavigate } from "react-router-dom";
interface Props {
  Icon: () => JSX.Element;
  title: string;
  func?: string;
}

export const ItemFunction: FC<Props> = ({ Icon, title, func }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleFunc = () => {
    if (func === "logout") {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="px-2" onClick={handleFunc}>
      <div>
        <div className="flex px-2 cursor-pointer hover:bg-black/25 dark:hover:bg-white/20 rounded-md">
          <div className="flex items-center justify-center w-9 h-9 my-2 mr-3 rounded-full bg-black/25 dark:bg-white/10">
            <Icon />
          </div>

          <div className="grow">
            <div className="py-3">
              <div className="-my-[5px]">
                <div className="my-[5px]">
                  <span
                    className="text-1520
                      font-medium text-primaryText dark:text-primaryTextDark"
                  >
                    {title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
