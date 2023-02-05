import { Logo } from "@/assets/svg";

const Intro = () => {
  return (
    <div>
      <div className="pt-[112px] pb-5 max900:pt-0 max900:flex max900:flex-col max900:items-center">
        <img
          src={Logo}
          alt="logo facebook"
          className="-m-7 w-[300px] h-[106px]"
        />
      </div>

      <h2 className="text-2832 font-normal w-[500px] max900:text-2428 max900:w-[400px] max900:text-center">
        Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
        bạn.
      </h2>
    </div>
  );
};

export default Intro;
