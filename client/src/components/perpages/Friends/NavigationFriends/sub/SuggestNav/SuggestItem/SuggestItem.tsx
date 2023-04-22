import { FriendStateItem } from "@/store";
import { FC, SyntheticEvent, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface Props {
  props: FriendStateItem;
  isActive: boolean;
  onSelect: (id: string) => void;
  onAdd: (id: string) => void;
  onDelete: (id: string) => void;
  onCancelRequest: (id: string) => void;
}

const ItemSuggest: FC<Props> = ({
  props,
  isActive,
  onSelect,
  onDelete,
  onAdd,
  onCancelRequest,
}) => {
  const { _id, fullName, avatarUrl } = props;

  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  const handleSelect = () => {
    onSelect(_id);
  };

  const handleAddFriend = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAdd(_id);
  };

  const handleDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(_id);
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onCancelRequest(_id);
  };

  return (
    <div className="px-2">
      <Link to={`/friends/suggest/${_id}`}>
        <div
          className={`px-2 rounded-md ${
            isActive
              ? "bg-black/10 dark:bg-white/10"
              : isHover
              ? ""
              : "hover:bg-black/10 dark:hover:bg-white/10"
          }`}
          onClick={handleSelect}
        >
          <div className="flex">
            <div className="shrink-0 mr-3 py-2">
              <LazyLoadImage
                width={60}
                height={60}
                className="rounded-full"
                src={avatarUrl}
                alt=""
              />
            </div>

            <div className="w-full py-1">
              {!!props?.isAdd ? (
                <div className="flex">
                  <div className="flex-1 px-1 -mt-1.5 flex flex-col justify-center py-4">
                    <span className="text-1418 text-primaryText dark:text-primaryTextDark font-semibold">
                      {fullName}
                    </span>
                    <span className="text-secondaryText dark:text-secondaryTextDark text-1215">
                      Đã gửi lời mời
                    </span>
                  </div>
                  <div className="flex-1 m-1 w-full flex items-center">
                    <div
                      className="grow flex items-center justify-center px-3 rounded-md h-9 bg-black/10 dark:bg-white/10"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleCancel}
                    >
                      <span className="text-1418 font-semibold text-primaryText dark:text-primaryTextDark">
                        Hủy yêu cầu
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col py-1.5 w-full">
                  <div className="px-1 -mt-1.5">
                    <span className="text-1418 text-primaryText dark:text-primaryTextDark font-semibold">
                      {fullName}
                    </span>
                  </div>

                  <div className="-mb-1.5 flex w-full">
                    <div className="m-1 w-full">
                      <div
                        className="flex items-center justify-center h-9 px-3 rounded-md bg-primary"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleAddFriend}
                      >
                        <span className="text-1418 font-semibold text-primaryText dark:text-primaryTextDark">
                          Thêm bạn bè
                        </span>
                      </div>
                    </div>

                    <div className="m-1 w-full">
                      <div
                        className="flex items-center justify-center px-3 rounded-md h-9 bg-black/10 dark:bg-white/10"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleDelete}
                      >
                        <span className="text-1418 font-semibold text-primaryText dark:text-primaryTextDark">
                          Xóa gỡ bỏ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemSuggest;
