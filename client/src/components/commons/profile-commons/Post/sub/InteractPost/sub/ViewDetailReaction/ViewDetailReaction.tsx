import { CustomScrollbar, Modal } from "@/components/commons";
import { useAuth } from "@/hooks";
import { sortAndFilterTypeReactions } from "@/utils";
import { FC, useEffect, useState } from "react";
import { ReactItem, HeaderViewDetail } from "./sub";

interface ReactionProps {
  _id: string;
  typeReaction: number;
  userId: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
}

interface TypeReactionProps {
  count: number | "all";
  typeReaction: number | "all";
}

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  postId: string;
}

const ViewDetailReaction: FC<Props> = ({ isOpen, onOpen, postId }) => {
  const { makeRequestWithAuth } = useAuth();
  const [reactions, setReactions] = useState<ReactionProps[]>([]);
  const [sortTypeReactions, setSortTypeReactions] = useState<
    TypeReactionProps[]
  >([]);
  const [typeReactionActive, setTypeReactionActive] = useState<"all" | number>(
    "all"
  );
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isOpenSeeMore, setIsOpenSeeMore] = useState<boolean>(false);

  const handleTypeReactionActive = (typeActive: "all" | number) => {
    setTypeReactionActive(typeActive);
    setIsOpenSeeMore(false);
  };

  const handleOpenSeemore = () => setIsOpenSeeMore((pre) => !pre);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        if (isOpen) {
          const data: any = await makeRequestWithAuth(
            "get",
            `/api/v1/posts/details/${postId}`
          );

          if (!!data) {
            const sortReactions = sortAndFilterTypeReactions([
              ...data.__countTypeReaction,
            ]);
            setSortTypeReactions([
              { count: "all", typeReaction: "all" },
              ...sortReactions,
            ]);
            setReactions([...data.__reactions]);
          }
        }
      } catch (error) {
        console.log({ error });
      }
    };
    getData();
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} wrapperId="view-post-detail">
      <div className="fixed inset-0 bg-white/50 dark:bg-black/50 z-10 overflow-hidden">
        <div className="absolute top-2/4 left-2/4 w-full max-w-[550px] h-3/4 rounded-lg bg-surface dark:bg-surfaceDark border border-divider dark:border-dividerDark -translate-x-2/4 -translate-y-2/4">
          <HeaderViewDetail
            sortTypeReactions={sortTypeReactions}
            isHover={isHover}
            typeReactionActive={typeReactionActive}
            isOpenSeeMore={isOpenSeeMore}
            onClassifyTypeActive={handleTypeReactionActive}
            onOpenSeemore={handleOpenSeemore}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClose={onOpen}
          />
          <div
            className="py-2 overscroll-contain"
            style={{ height: `calc(100% - 60px - 8px)` }}
          >
            <CustomScrollbar>
              {reactions.map((reaction) => {
                if (typeReactionActive === "all") {
                  return (
                    <ReactItem
                      key={reaction._id}
                      userId={reaction.userId}
                      typeReaction={reaction.typeReaction}
                    />
                  );
                } else {
                  if (typeReactionActive === reaction.typeReaction) {
                    return (
                      <ReactItem
                        key={reaction._id}
                        userId={reaction.userId}
                        typeReaction={reaction.typeReaction}
                      />
                    );
                  } else return null;
                }
              })}
            </CustomScrollbar>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewDetailReaction;
