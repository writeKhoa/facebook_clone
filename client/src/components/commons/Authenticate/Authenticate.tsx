import { useState } from "react";
import Login from "./Login";
import Intro from "./Intro";
import Register from "./Register";

const Authenticate = () => {
  const [isOpenRegister, setIsOpenRegister] = useState<boolean>(false);

  const handleOpenRegister = () => {
    setIsOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setIsOpenRegister(false);
  };

  return (
    <div className="w-full pt-[72px] pb-[132px] max900:pt-5 max900:pb-5 bg-bgAuthentication">
      <div className="flex w-[980px] py-5 mx-auto max1075:w-auto max1075:mx-10 max900:flex-col max900:items-center">
        <div className="grow pr-8 max900:pr-0">
          <Intro />
        </div>

        <div className="w-[396px] shrink-0">
          <Login onOpenRegister={handleOpenRegister} />
        </div>

        <Register isOpen={isOpenRegister} onClose={handleCloseRegister} />
      </div>
    </div>
  );
};

export default Authenticate;
