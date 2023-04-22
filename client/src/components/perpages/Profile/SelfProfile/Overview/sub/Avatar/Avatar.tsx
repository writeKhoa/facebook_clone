import { Modal } from "@/components/commons";
import {
  CameraAvatarProfileIcon,
  CloseIcon,
  GlobalIcon,
} from "@/components/commons/Icons";
import { useAuth } from "@/hooks";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

interface Props {
  mediumAvatarUrl: string;
}

const Avatar: FC<Props> = ({ mediumAvatarUrl }) => {
  const { makeRequestWithAuth, onChangeAvatar } = useAuth();
  const [isOpenUploadAvatar, setIsOpenUploadAvatar] = useState<boolean>(false);
  const [avatarUploadSuccessed, setAvatarUploadSuccessed] =
    useState<string>("");
  const [avatarUpload, setAvatarUpload] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const uploadAvatarRef = useRef<HTMLInputElement>(null);

  const handleOpenUploadAvatar = () => setIsOpenUploadAvatar(true);
  const handleCloseUploadAvatar = () => setIsOpenUploadAvatar(false);

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (file) {
        const imagePreview = URL.createObjectURL(file);
        setAvatarUpload(file);
        setAvatarPreview(imagePreview);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handleUploadAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append("image", avatarUpload as File);
      const data = await makeRequestWithAuth(
        "post",
        "/api/v1/users/update-avatar",
        formData
      );

      setIsOpenUploadAvatar(false);
      onChangeAvatar(data?.__result[0], data?.__result[1]);
      setAvatarUpload(null);
      setAvatarUploadSuccessed(data?.__result[1]);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleTriggerInputFIle = () => {
    if (uploadAvatarRef.current) {
      uploadAvatarRef.current.click();
    }
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatarPreview);
    };
  }, []);

  return (
    <>
      <div className="relative w-[168px] h-[168px] rounded-full">
        <img
          src={avatarUploadSuccessed || mediumAvatarUrl}
          alt="avatar"
          className="rounded-full cursor-pointer"
        />

        <div
          className="absolute right-2 bottom-2"
          onClick={handleOpenUploadAvatar}
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-black/50 dark:bg-surfaceDark cursor-pointer">
            <CameraAvatarProfileIcon />
          </span>
        </div>
      </div>

      {isOpenUploadAvatar && (
        <Modal isOpen={isOpenUploadAvatar} wrapperId="upload-avatar">
          <div className="fixed inset-0 bg-white/50 dark:bg-black/50 z-[60]">
            <div className="h-full py-16 px-2">
              <div className="max-w-3xl h-full mx-auto rounded-lg border-divider dark:border-dividerDark bg-surface dark:bg-surfaceDark">
                {/* header upload avatar */}
                <div className="relative flex items-center justify-center h-[60px] border-b border-divider dark:border-dividerDark">
                  <h2 className="text-2024 text-primaryText dark:text-primaryTextDark font-bold">
                    Cập nhật ảnh đại diên
                  </h2>

                  <div
                    className="absolute top-3 right-3 flex justify-center items-center w-9 h-9 rounded-full bg-black/20 dark:bg-white/20 text-primaryIcon dark:text-primaryIconDark cursor-pointer"
                    onClick={handleCloseUploadAvatar}
                  >
                    <CloseIcon width={20} height={20} />
                  </div>
                </div>

                {!!avatarPreview ? (
                  <div className="flex flex-col w-full h-full">
                    <div
                      className="shrink-0 mx-auto py-4 box-content"
                      style={{ width: 300, height: 300 }}
                    >
                      <img
                        src={avatarPreview}
                        alt=""
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>

                    <div className="py-4">
                      <div className="flex items-center px-4 text-secondaryIcon dark:text-secondaryIconDark">
                        <GlobalIcon width={24} height={24} />

                        <span className="ml-4 text-1720 text-secondaryIcon dark:text-secondaryTextDark font-medium">
                          Ảnh đại diện của bạn hiển thị công khai.
                        </span>
                      </div>
                    </div>

                    <div className=" border-b border-divider dark:border-dividerDark"></div>

                    <div className="flex justify-end gap-4 p-4 h-9 box-content">
                      <div
                        className="flex items-center px-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-md cursor-pointer"
                        onClick={handleCloseUploadAvatar}
                      >
                        <span className="text-primary font-medium">Hủy</span>
                      </div>

                      <div
                        className="flex items-center px-10 h-9 bg-primary rounded-md cursor-pointer"
                        onClick={handleUploadAvatar}
                      >
                        <span className="font-semibold text-primaryText dark:text-primaryTextDark">
                          Lưu
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="pt-2 mx-4 pb-4">
                    <div className="py-4">
                      <div className="px-4 mb-1">
                        <div
                          className="flex justify-center items-center h-9 rounded-md bg-primary/30 px-3 cursor-pointer"
                          onClick={handleTriggerInputFIle}
                        >
                          <input
                            type="file"
                            className="hidden"
                            ref={uploadAvatarRef}
                            onChange={handleChangeFile}
                          />
                          <span className="text-1418 text-primary font-medium">
                            + Tải ảnh lên
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Avatar;
