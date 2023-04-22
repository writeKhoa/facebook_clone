import { EmptyPeopleSvg } from "@/assets";

const EmptyPeople = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="p-6">
        <div className="mb-5 w-[112px] h-[112px] mx-auto">
          <img src={EmptyPeopleSvg} alt="" />
        </div>
        <div className="text-center">
          <span className="text-2024 text-primaryText dark:text-primaryTextDark font-bold">
            Chọn tên của người mà bạn muốn xem trước trang cá nhân.
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmptyPeople;
