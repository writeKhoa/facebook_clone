import {
  FriendIcon,
  GlobalIcon,
  PrivateIcon,
  Tooltip,
} from "@/components/commons";
import { feelings } from "@/configs";
import { timeHover, timeSince } from "@/utils";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface Props {
  props: {
    _id: string;
    avatarUrl: string;
    fullName: string;
    feeling?: number;
    tags?: { tagId: string; fullName: string }[];
    createdAt: string;
    audiance: 1 | 2 | 3;
  };
}

const InfoAuthorPost: FC<Props> = ({ props }) => {
  const { _id, avatarUrl, fullName, feeling, tags, createdAt, audiance } =
    props;
  return (
    <>
      <div className="shrink-0">
        <Link to={`/${_id}`}>
          <LazyLoadImage
            width={40}
            height={40}
            src={avatarUrl}
            alt="avatar"
            className="rounded-full cursor-pointer"
          />
        </Link>
      </div>

      <div className="grow flex flex-col ml-2">
        <div className="flex flex-col w-full">
          <div className="block">
            <span className="-py-1 text-primaryText dark:text-primaryTextDark font-semibold text-1214">
              <Link to={`/${_id}`}>
                <span className="inline-block hover:underline text-1520">
                  {fullName}
                </span>
              </Link>
              <span className="inline-block">
                {typeof feeling === "number" && (
                  <span className="flex gap-1 mx-1 text-1520   font-normal text-secondaryText dark:text-secondaryTextDark">
                    đang{" "}
                    <LazyLoadImage
                      src={feelings[feeling].src}
                      width={20}
                      height={20}
                    />{" "}
                    cảm thấy <>{feelings[feeling].title}</>
                  </span>
                )}
              </span>

              {!!tags && tags?.length > 0 && (
                <>
                  {
                    <span className="ml-1 font-semibold text-1520 text-primaryText dark:text-primaryTextDark">
                      <span className="text-1520 font-normal text-secondaryText dark:text-secondaryTextDark">
                        cùng với
                      </span>{" "}
                      <>
                        {tags.map((tag, index) => {
                          const isMoreTaggedThreePeople = tags.length > 3;

                          const isTwoFirstPeople = index < 2;
                          const isThirdPeopel = index === 2;

                          const theLastPeople = tags.length - 1 === index;

                          if (isMoreTaggedThreePeople) {
                            if (isTwoFirstPeople) {
                              return (
                                <Link to={`/${tag.tagId}`} key={tag.tagId}>
                                  <span className="hover:underline mx-1 cursor-pointer">
                                    {tag.fullName},
                                  </span>
                                </Link>
                              );
                            } else if (isThirdPeopel) {
                              return (
                                <Link to={`/${tag.tagId}`} key={tag.tagId}>
                                  <span className="hover:underline mx-1 cursor-pointer">
                                    {tag.fullName}
                                  </span>
                                </Link>
                              );
                            } else if (index === 3) {
                              return (
                                <span
                                  key={tag.tagId}
                                  className="mx-1 cursor-pointer"
                                >
                                  và {tags.length - 3} người khác.
                                </span>
                              );
                            } else {
                              return null;
                            }
                          } else {
                            if (theLastPeople) {
                              return (
                                <Link to={`/${tag.tagId}`} key={tag.tagId}>
                                  <span className="hover:underline mx-1 cursor-pointer">
                                    {tag.fullName}.
                                  </span>
                                </Link>
                              );
                            } else {
                              return (
                                <Link to={`/${tag.tagId}`} key={tag.tagId}>
                                  <span className="hover:underline mx-1 cursor-pointer">
                                    {tag.fullName},
                                  </span>
                                </Link>
                              );
                            }
                          }
                        })}
                      </>
                    </span>
                  }
                </>
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span>
            <Tooltip tooltip={String(timeHover(new Date(createdAt).getTime()))}>
              <span className="text-1215 font-normal text-secondaryText dark:text-secondaryTextDark cursor-pointer">
                {timeSince(new Date(createdAt).getTime())}
              </span>
            </Tooltip>
          </span>
          <span className="ml-3 text-secondaryIcon dark:text-secondaryIconDark">
            {(() => {
              switch (audiance) {
                case 1:
                  return <PrivateIcon />;
                case 2:
                  return <FriendIcon />;
                case 3:
                  return <GlobalIcon />;
                default:
                  return <></>;
              }
            })()}
          </span>
        </div>
      </div>
    </>
  );
};

export default InfoAuthorPost;
