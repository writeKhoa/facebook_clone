import { FC } from "react";
import LoginForm from "./LoginForm";
import RegisterMessage from "./RegisterMessage";

interface Props {
  onOpenRegister: () => void;
}

export const Login: FC<Props> = ({ onOpenRegister }) => {
  return (
    <div className="w-[396px] h-[496px] ">
      <div className="w-[396px] h-[456px]">
        <div className="mt-10 pt-[10px] pb-6 bg-surface rounded-lg form-shadow">
          <LoginForm onOpenRegister={onOpenRegister} />
        </div>
        <div className="mt-7 text-sm text-center">
          <RegisterMessage />
        </div>
      </div>
    </div>
  );
};

export default Login;
