import { FC, ReactNode } from "react";
import Portal from "./Portal";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  wrapperId: string;
}

const Modal: FC<Props> = ({ children, isOpen, wrapperId }) => {
  if (!isOpen) return null;

  return <Portal wrapperId={wrapperId}>{children}</Portal>;
};

export default Modal;
