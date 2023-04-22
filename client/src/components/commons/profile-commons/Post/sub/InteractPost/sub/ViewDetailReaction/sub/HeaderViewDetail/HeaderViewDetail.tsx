import { CloseIcon } from "@/components/commons";
import { classifyTypeReactedConfig } from "@/configs";
import { FC } from "react";
import { Seemore } from "./sub";

interface TypeReactionProps {
  count: number | "all";
  typeReaction: number | "all";
}

interface Props {
  sortTypeReactions: TypeReactionProps[];
  typeReactionActive: number | "all";
  isOpenSeeMore: boolean;
  isHover: boolean;
  onClassifyTypeActive: (typeActive: "all" | number) => void;
  onOpenSeemore: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

const HeaderViewDetail: FC<Props> = ({
  sortTypeReactions,
  typeReactionActive,
  isOpenSeeMore,
  isHover,
  onClassifyTypeActive,
  onOpenSeemore,
  onMouseEnter,
  onMouseLeave,
  onClose,
}) => {
  return (
    <div className="flex w-full h-[60px]">
      <div className="grow flex px-4 h-full">
        {sortTypeReactions.length > 0 && (
          <>
            {sortTypeReactions.slice(0, 4).map((typeReaction, index) => {
              const Icon = classifyTypeReactedConfig.get(
                typeReaction.typeReaction
              )?.Icon;
              return (
                <div
                  className="relative flex rounded-lg hover:bg-black/10 dark:hover:bg-white/10 m-1 cursor-pointer"
                  key={index}
                  onClick={() =>
                    onClassifyTypeActive(typeReaction.typeReaction)
                  }
                >
                  <div className="px-3 flex items-center">
                    {typeReaction.typeReaction === "all" ? (
                      <span className="text-primaryText dark:text-primaryTextDark font-semibold text-1520 whitespace-nowrap">
                        Tất cả
                      </span>
                    ) : (
                      <>
                        <span className="mr-1 w-5 h-5">
                          {/* @ts-ignore */}
                          <Icon />
                        </span>
                        <span className="text-1520 font-semibold text-secondaryText dark:text-secondaryTextDark">
                          {typeReaction.count}
                        </span>
                      </>
                    )}
                  </div>
                  {typeReactionActive === typeReaction.typeReaction ? (
                    <div className="absolute bottom-0 left-0 bg-primary w-full h-[3px]"></div>
                  ) : null}
                </div>
              );
            })}
          </>
        )}

        <Seemore
          sortTypeReactions={sortTypeReactions}
          isHover={isHover}
          typeReactionActive={typeReactionActive}
          isOpenSeeMore={isOpenSeeMore}
          onClassifyTypeActive={onClassifyTypeActive}
          onOpenSeemore={onOpenSeemore}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>

      <div className="shrink-0 flex items-center mx-4">
        <div
          className="flex justify-center items-center w-9 h-9 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-primaryIcon dark:text-primaryIconDark cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default HeaderViewDetail;
