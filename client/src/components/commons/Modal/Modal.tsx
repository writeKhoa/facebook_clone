import { FC, ReactNode, useEffect } from "react";
import Portal from "./Portal";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  wrapperId: string;
  disabledOverflow?: boolean;
}

const Modal: FC<Props> = ({
  children,
  isOpen,
  wrapperId,
  disabledOverflow = false,
}) => {
  useEffect(() => {
    if (disabledOverflow) return;
    else {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      }
    }

    return () => {
      if (disabledOverflow) return;
      else {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return <Portal wrapperId={wrapperId}>{children}</Portal>;
};

export default Modal;
