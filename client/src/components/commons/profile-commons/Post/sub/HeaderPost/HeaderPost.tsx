import { ThreedotIcon } from "@/components/commons/Icons";
import { useClickOutside } from "@/hooks";
import { FC, useRef, useState } from "react";
import { InfoHeaderPost, Options } from "./sub";

interface Props {
  props: {
    view: "other-post" | "my-post";
    postId: string;
    userId: {
      _id: string;
      avatarUrl: string;
      fullName: string;
    };
    tags?: { tagId: string; fullName: string }[];
    createdAt: string;
    audiance: 1 | 2 | 3;
    feeling?: number;
  };
  isPinned: boolean;
  where: "profile" | "home";
}

const HeaderPost: FC<Props> = ({ props, isPinned, where }) => {
  const { view, postId, userId, createdAt, audiance, feeling, tags } = props;
  const { avatarUrl, fullName, _id } = userId;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonOptionRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLDivElement>(null);

  const handleClickOption = () => setIsOpen((pre) => !pre);
  const handleCloseOption = () => {
    setIsOpen(false);
  };

  useClickOutside([optionRef, buttonOptionRef], handleCloseOption, [isOpen]);

  return (
    <div className="px-4 pt-3 mb-3 text-primaryText dark:text-primaryTextDark">
      <div className="flex">
        <InfoHeaderPost
          props={{
            _id,
            avatarUrl,
            fullName,
            feeling,
            tags,
            createdAt,
            audiance,
          }}
        />

        <div
          className="relative shrink-0 w-9 h-9"
          ref={buttonOptionRef}
          onClick={handleClickOption}
        >
          <div className="w-full h-full rounded-full text-primaryIcon dark:text-primaryIconDark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer">
            <div className="flex items-center justify-center w-full h-full">
              <ThreedotIcon />
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-full right-full z-10" ref={optionRef}>
              <Options
                view={view}
                onClose={handleCloseOption}
                _id={postId}
                isPinned={isPinned}
                where={where}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default HeaderPost;
