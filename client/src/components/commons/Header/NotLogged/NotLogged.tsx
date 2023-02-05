import { Input } from "@/components/commons";
import { LogoFbText } from "@/components/commons/Icons";
import { useAuth } from "@/hooks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotLogged = () => {
  const nav = useNavigate();
  const { login } = useAuth();
  const [account, setAccount] = useState({ account: "", password: "" });
  const handleOnChange = (e: any) => {
    setAccount((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      if (!account.account || !account.password) {
        throw "Vui lòng điền đầy đủ các ttrường";
      }
      await login(account);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center w-full h-full border-b border-divider bg-surface px-4">
      <div className="shrink-0">
        <div className="flex items-center w-full">
          <Link to={"/"}>
            <LogoFbText />
          </Link>
        </div>
      </div>

      <div className="grow">
        <div className="flex justify-end gap-2 w-full h-10 ml-auto pr-4">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-end gap-2 w-full h-10 ml-auto pr-4">
              <div className="shrink-0 w-[188px] max900:hidden">
                <Input
                  placeholder="Email hoặc số điện thoại"
                  name="account"
                  value={account.account}
                  onChange={handleOnChange}
                />
              </div>
              <div className="shrink-0 w-[188px] max900:hidden">
                <Input
                  placeholder="Mật khẩu"
                  name="password"
                  value={account.password}
                  onChange={handleOnChange}
                />
              </div>
              <div className="shrink-0 h-full max900:hidden">
                <div className="flex items-center px-3 rounded-md h-full bg-primaryBtnBg text-white ">
                  <button className="text-1520 font-semibold">Đăng nhập</button>
                </div>
              </div>
            </div>
          </form>

          <div className="shrink-0 h-full min901:hidden">
            <div className="flex items-center px-3 rounded-md h-full bg-primaryBtnBg text-white ">
              <button
                className="text-1520 font-semibold"
                onClick={() => nav("/")}
              >
                Đăng nhập
              </button>
            </div>
          </div>

          <div className="shrink-0 flex items-center ml-2 max900:hidden">
            <Link to={"/notdevelop"}>
              <span className="text-primary">Bạn quên tài khoản ư?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLogged;
