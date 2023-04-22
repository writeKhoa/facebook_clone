import { ShortProfileItem } from "@/models";
import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface Props {
  props: ShortProfileItem;
  onRemove: () => void;
  onAdd: () => void;
  onCancel: () => void;
}

const SuggestUserItem: FC<Props> = ({ props, onRemove, onAdd, onCancel }) => {
  const { _id, fullName, mediumAvatarUrl } = props;

  const [isAdd, setIsAdd] = useState<boolean>(false);

  const handleRemove = () => {
    if (isAdd) {
      setIsAdd(false)
      onCancel()
    } else {
      onRemove()
    }
  }

  const handleAdd = () => {
    try {
      setIsAdd(true)
      onAdd()
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <div className="m-1 flex-1" style={{ maxWidth: 250, minWidth: 200 }}>
      <div className="flex flex-col border border-divider dark:border-dividerDark rounded-lg bg-surface dark:bg-surfaceDark overflow-hidden">
        <div className="relative w-full pt-[100%]">
          <Link to={`/friends/requests/${_id}`}>
            <LazyLoadImage
              className="absolute top-0 left-0"
              src={mediumAvatarUrl}
              width={250}
              height={250}
            />
          </Link>
        </div>
        <div>
          <div className="p-3">
            <span className="text-1720 my-0.5 text-primaryText dark:text-primaryTextDark font-semibold">
              {fullName}
            </span>

            <div className="mt-2">
              {isAdd ? (
                <div className="h-9">
                  <span className="text-1720 my-0.5 text-secondaryText dark:text-secondaryTextDark">
                    Đã gửi lời mời
                  </span>
                </div>
              ) : (
                <div className="h-9 rounded-md bg-primary/20 text-primary font-semibold text-1418 cursor-pointer">
                  <div className="flex justify-center items-center h-full px-3"
                    onClick={handleAdd}
                  >
                    <span className="text-primary text-1418 font-semibold">
                      Thêm bạn bè
                    </span>
                  </div>
                </div>
              )}

              <div
                className="h-9 mt-1 rounded-md bg-black/20 dark:bg-white/20 text-primaryText dark:text-primaryTextDark font-semibold text-1418 cursor-pointer"
                onClick={handleRemove}
              >
                <div className="flex items-center justify-center h-full px-3">
                  {isAdd ? (
                    <span className="text-primaryText dark:text-primaryTextDark text-1520 font-semibold limit-1">
                      Hủy
                    </span>
                  ) : (
                    <span className="text-primaryText dark:text-primaryTextDark text-1418 font-semibold">
                      Xóa, gỡ bỏ
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestUserItem;
