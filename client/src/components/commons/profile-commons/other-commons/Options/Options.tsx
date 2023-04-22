import { ThreeDotIcon } from "@/components/commons/Icons";

const Options = () => {
  return (
    <div className="px-4 h-9 rounded bg-normalBtn dark:bg-normalBtnDark cursor-pointer">
      <div className="flex items-center justify-center h-full -mx-[3px] text-primaryText dark:text-primaryIconDark">
        <ThreeDotIcon />
      </div>
    </div>
  );
};

export default Options;
