import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  list: any[];
  onClose: () => void;
}

const ListSearch: FC<Props> = ({ list, onClose }) => {
  if (!list) {
    return (
      <div className="p-2">
        <div className="w-full h-9 text-center text-secondaryText dark:text-secondaryTextDark">
          <span>Không có tìm kiếm nào gần đây</span>
        </div>
      </div>
    );
  }
  return (
    <div className="p-2">
      {list.map((item) => {
        const { _id, fullName, avatarUrl, type } = item;
        return (
          <div
            key={_id}
            className="rounded-md hover:bg-black/10 dark:hover:bg-white/10"
            onClick={onClose}
          >
            <Link to={`/${_id}`}>
              <div className="flex items-center h-[52px] p-2">
                <div className="h-full">
                  <img
                    src={avatarUrl}
                    className="rounded-full h-full"
                    alt="avatar"
                  />
                </div>
                <div className="ml-[10px] flex flex-col justify-center">
                  <div>
                    <span className="text-primaryText dark:text-primaryTextDark">
                      {fullName}
                    </span>
                  </div>
                  <div className="-mt-1">
                    {type === "yourself" ? (
                      <span className="text-1215 text-secondaryText dark:text-secondaryTextDark">
                        Bạn
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListSearch;
