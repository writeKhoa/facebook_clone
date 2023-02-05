import { Modal } from "@/components/commons";
import { CloseIcon } from "@/components/commons/Icons";
import { FC } from "react";
import HeaderRegisterForm from "./HeaderRegister";
import RegisterForm from "./RegisterForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Register: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal wrapperId="register-form" isOpen={isOpen}>
      <div className="fixed inset-0">
        <div className="pt-[25px] h-screen">
          <div className="h-screen flex items-center justify-center">
            <div className="relative m-5 w-[432px] rounded-md form-shadow bg-space">
              <button className="absolute top-2 right-4" onClick={onClose}>
                <CloseIcon />
              </button>
              <div>
                <HeaderRegisterForm />

                <div className="border-b-[1px] border-border"></div>
                <div className="p-4 transition-all">
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
