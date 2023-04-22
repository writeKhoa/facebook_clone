import { ArrowDownIcon } from "@/components/commons";
import { MarkIcon } from "@/components/commons/Icons/EditorState.Icon";
import { classifyTypeReactedConfig } from "@/configs";
import { FC, SyntheticEvent } from "react";

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
}

const Seemore: FC<Props> = ({
  sortTypeReactions,
  typeReactionActive,
  isHover,
  isOpenSeeMore,
  onClassifyTypeActive,
  onOpenSeemore,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <>
      {sortTypeReactions.length > 5 && (
        <div
          className={`${
            isHover ? "" : "hover:bg-black/10 dark:hover:bg-white/10"
          } relative flex items-center px-3 rounded-lg m-1 cursor-pointer`}
          onClick={onOpenSeemore}
        >
          <span
            className={`${
              sortTypeReactions
                .slice(5, 7)
                .find((item) => item.typeReaction === typeReactionActive)
                ? "text-primary"
                : "text-primaryText dark:text-primaryTextDark"
            } font-semibold text-1520`}
          >
            Xem thêm
            <span className="ml-1">
              <ArrowDownIcon
                isActive={
                  !!sortTypeReactions
                    .slice(5, 7)
                    .find((item) => item.typeReaction === typeReactionActive)
                }
              />
            </span>
          </span>
          {sortTypeReactions
            .slice(5, 7)
            .find((item) => item.typeReaction === typeReactionActive) ? (
            <div className="absolute bottom-0 left-0 bg-primary w-full h-[3px]"></div>
          ) : null}
          {isOpenSeeMore ? (
            <div
              className="absolute top-full left-0 flex flex-col py-2 rounded-lg my-boxshadow bg-surface dark:bg-surfaceDark z-20"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {sortTypeReactions.slice(5, 7).map((item) => {
                const Icon = classifyTypeReactedConfig.get(
                  item.typeReaction
                )?.Icon;
                return (
                  <div
                    key={item.typeReaction}
                    className="flex justify-start items-center w-32 mx-2 p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
                    onClick={(e: SyntheticEvent) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onClassifyTypeActive(item.typeReaction);
                    }}
                  >
                    <span className="mr-3 w-5 h-5">
                      {/* @ts-ignore */}
                      <Icon />
                    </span>
                    <span className="text-1520 font-semibold text-secondaryText dark:text-secondaryTextDark">
                      {item.count}
                    </span>
                    <span className="grow flex justify-end">
                      {item.typeReaction === typeReactionActive && <MarkIcon />}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Seemore;
