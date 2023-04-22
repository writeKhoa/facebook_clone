import { Modal } from "@/components/commons";
import { useAuth, usePosts } from "@/hooks";
import { FC, useEffect, useState } from "react";
import constants from "./config/constants";
import { FormAudiance, FormDefault, FormFeeling, FormTag } from "./sub";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCreatePost: FC<Props> = ({ isOpen, onClose }) => {
  const { makeRequestWithAuth } = useAuth();
  const {
    contentPost,
    postEdit,
    modeEditor,
    imageEdit,
    imagePreview,
    onInitPostEdit,
  } = usePosts();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formAcitve, setFormActive] = useState<
    "default" | "tag" | "feeling" | "audiance"
  >("default");

  const [isOpenAddImage, setIsOpenAddImage] = useState<boolean>(false);

  const handleOpenAddImage = () => {
    if (contentPost.background !== 0) {
      return;
    }
    setIsOpenAddImage(true);
  };
  const handleCloseAddImage = () => setIsOpenAddImage(false);

  const handleReturnDefault = () => {
    setFormActive("default");
  };

  const handleOpenTagForm = () => {
    setFormActive("tag");
  };

  const handleOpenFeelingForm = () => {
    setFormActive("feeling");
  };

  const handleOpenAudianceForm = () => {
    setFormActive("audiance");
  };

  const height = () => {
    if (isOpenAddImage) {
      return constants.image;
    }
    switch (formAcitve) {
      case "default":
        if (contentPost.format === 1) return constants.default;
        return constants.image;
      case "tag":
        return constants.tag;
      case "feeling":
        return constants.feeling;
      case "audiance":
        return constants.audiance;
    }
  };

  useEffect(() => {
    if (imageEdit) {
      setIsOpenAddImage(true);
    }
  }, [imageEdit]);

  useEffect(() => {
    const abortController: AbortController | null = new AbortController();
    const getData = async () => {
      if (!!postEdit && modeEditor === "edit") {
        try {
          const data = await makeRequestWithAuth(
            "get",
            `/api/v1/posts/${postEdit}`
          );
          const { contentPost, headerPost } = data.__post;
          onInitPostEdit(headerPost, contentPost, contentPost.imageUrl || "");
        } catch (error) {
          console.log({ error });
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [postEdit, modeEditor]);

  return (
    <Modal isOpen={isOpen} wrapperId="modal-create-post">
      <div className="fixed inset-0 bg-white/50 dark:bg-black/50 overscroll-auto z-[99]">
        <div className="relative w-full h-full">
          <div
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 overflow-hidden"
            style={{
              width: 500,
              height: height(),
            }}
          >
            {isLoading ? (
              <div
                className="h-full bg-surface dark:bg-surfaceDark border border-divider dark:border-dividerDark rounded-lg"
                style={{ width: 500 }}
              >
                <div onClick={onClose}>close</div>
              </div>
            ) : (
              <>
                <div
                  className={`absolute top-0 left-0 w-full h-full ${
                    formAcitve === "default" ? "" : "translate-x-full"
                  } `}
                >
                  <FormDefault
                    isOpenAddImage={isOpenAddImage}
                    onClose={onClose}
                    onOpenTagForm={handleOpenTagForm}
                    onOpenFeelingForm={handleOpenFeelingForm}
                    onOpenAudianceForm={handleOpenAudianceForm}
                    onOpenAddImage={handleOpenAddImage}
                    onCloseAddImage={handleCloseAddImage}
                  />
                </div>

                <div
                  className={`absolute top-0 left-0 w-full h-full ${
                    formAcitve !== "default" ? "" : "translate-x-full"
                  } `}
                >
                  {(() => {
                    switch (formAcitve) {
                      case "feeling":
                        return (
                          <FormFeeling onReturnDefault={handleReturnDefault} />
                        );
                      case "audiance":
                        return <FormAudiance onReturn={handleReturnDefault} />;
                      case "tag":
                        return (
                          <FormTag onReturnDefault={handleReturnDefault} />
                        );
                      default:
                        return <></>;
                    }
                  })()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCreatePost;
