import { CloseIcon, Modal } from "@/components/commons";
import { useAuth } from "@/hooks";
import { ShortProfileItem } from "@/models";
import React, { FC, forwardRef, useEffect, useState } from "react";
import { RequestSentItem } from "./sub";
import { CustomScrollbar } from "@/components/commons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RequestSent = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, onClose }, ref) => {
    const { makeRequestWithAuth } = useAuth();
    const [sentUsers, setSentUsers] = useState<ShortProfileItem[]>([]);
    const [count, setCount] = useState<number>(0);

    const handleCancelMakeFriend = async (id: string) => {
      try {
        await makeRequestWithAuth(
          "post",
          "/api/v1/friends/cancel-request-make-friend",
          {
            userReceivedId: id,
          }
        );
      } catch (error) {
        console.log({ error });
      }
    };

    useEffect(() => {
      const getData = async () => {
        try {
          const data = await makeRequestWithAuth(
            "get",
            "/api/v1/friends/requests/sent"
          );
          setSentUsers(data?.__requestSentList);
          setCount(data?.__requestSentCount);
        } catch (error) {
          console.log({ error });
        }
      };

      getData();
    }, []);
    return (
      <Modal isOpen={isOpen} wrapperId="request-sent">
        <div className="fixed inset-0 bg-white/50 dark:bg-black/50">
          <div className="w-full h-full flex items-center justify-center">
            <div
              ref={ref}
              className="rounded-lg border border-divider dark:border-dividerDark bg-surface dark:bg-surfaceDark overflow-hidden"
              style={{ height: 440, width: 520 }}
            >
              <div className="relative h-[60px] px-10 flex items-center justify-center border-b border-divider dark:border-dividerDark">
                <h2 className="text-2428 font-bold text-primaryText dark:text-primaryTextDark">
                  Lời mời đã gửi
                </h2>

                <div
                  className="absolute top-3 right-3 flex justify-center items-center w-9 h-9 rounded-full bg-black/20 dark:bg-white/20 hover:bg-black/30 hover:dark:bg-white/30 cursor-pointer text-secondaryIcon dark:text-secondaryIconDark"
                  onClick={onClose}
                >
                  <CloseIcon />
                </div>
              </div>

              <div style={{ height: 380 }}>
                <CustomScrollbar>
                  {count > 0 ? (
                    <>
                      <div className="mx-4 my-3 text-1214">
                        <span className="text-1418 font-semibold text-primaryText dark:text-primaryTextDark">{`${count} lời mời đã gửi`}</span>
                      </div>

                      <>
                        {sentUsers.map((item) => {
                          return (
                            <RequestSentItem
                              key={item._id}
                              props={item}
                              onCancel={() => handleCancelMakeFriend(item._id)}
                            />
                          );
                        })}
                      </>
                    </>
                  ) : null}
                </CustomScrollbar>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
);

export default RequestSent;
