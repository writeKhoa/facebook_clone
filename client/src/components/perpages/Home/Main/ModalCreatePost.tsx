import { forwardRef, useState } from "react";
import { Modal, Button, LazyImage } from "@/components/commons";
import { ComposerImg, PrivateImg } from "@/assets/images";
import {
  CloseIcon,
  ChooseEmotionIcon,
  ThreeDotIcon,
  EventIcon,
  MapIcon,
  TagIcon,
  EmotionIcon,
  PictureVideoIcon,
  ArrowDownIcon,
} from "@/components/commons/Icons";

interface Props {
  isOpen: boolean;
  user: any;
  onClose: () => void;
}

const ModalCreatePost = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, user, onClose }, createPostRef) => {
    return (
      <Modal isOpen={isOpen} wrapperId="create-post">
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-40">
          <div className="relative z-50 shadow" ref={createPostRef}>
            <div className="flex flex-col w-[500px] min-h-[428px] border border-divider dark:border-dividerDark rounded-lg bg-surface dark:bg-surfaceDark">
              <div className="flex justify-center items-center h-[60px]  border-b border-b-divider dark:border-b-dividerDark">
                <h2>
                  <span className="text-2024 font-bold text-primaryText dark:text-primaryTextDark">
                    Tạo bài viết
                  </span>
                </h2>
              </div>
              <div
                className="absolute top-3 right-5 flex items-center justify-center w-9 h-9 ml-auto rounded-full bg-black/10 dark:bg-white/10 text-secondaryIcon dark:text-secondaryTextDark cursor-pointer"
                onClick={onClose}
              >
                <CloseIcon />
              </div>

              <div className="flex mx-4 py-4">
                <div className="mr-3">
                  <img
                    src={user?.avatarUrl}
                    alt="avatar"
                    className="rounded-full w-10 h-10 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col -mt-2">
                  <div>
                    <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
                      {user?.fullName}
                    </span>
                  </div>
                  <div className="flex px-2 py-[6px] rounded-md bg-black/10 dark:bg-white/10 cursor-pointer">
                    <LazyImage
                      src={PrivateImg}
                      className="w-3 h-3 mr-1 filter-black dark:filter-white"
                      alt="private mode"
                    />

                    <span className="mx-1 text-1214 font-semibold text-primaryText dark:text-primaryTextDark">
                      Chỉ mình tôi
                    </span>

                    <span className="flex justify-center items-center h-3 ml-1">
                      <ArrowDownIcon />
                    </span>
                  </div>
                </div>
              </div>

              <div className="grow px-4 pb-10 text-2428 text-secondaryText dark:text-secondaryTextDark font-normal">
                {`${user?.firstName} ơi, bạn đang nghĩ gì thế?`}
              </div>

              <div className="flex justify-between px-4">
                <LazyImage
                  className="h-[38px] w-[38px]"
                  src={ComposerImg}
                  alt="composer"
                />
                <span className="cursor-pointer text-primaryIcon dark:text-primaryIcon">
                  <ChooseEmotionIcon />
                </span>
              </div>

              <div className="py-4">
                <div className="mx-4 h-[50px] p-2 border border-devider border-dividerDark rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-1520 font-semibold text-primaryText dark:text-primaryTextDark">
                      Thêm vào bài viết của bạn
                    </span>

                    <div className="flex items-center -my-1">
                      <div className="flex">
                        <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                          <PictureVideoIcon />
                        </div>
                        <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                          <TagIcon />
                        </div>
                        <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                          <EmotionIcon />
                        </div>
                        <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                          <MapIcon />
                        </div>
                        <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                          <EventIcon />
                        </div>
                        <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-primaryIcon dark:text-primaryIconDark">
                          <ThreeDotIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 px-4">
                  <Button variant="primary" size="small">
                    Đăng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
);

export default ModalCreatePost;
