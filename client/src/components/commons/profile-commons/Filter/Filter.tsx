import { CloseIcon, FilterPostIcon, Modal } from "@/components/commons";
import { FC, useEffect, useState } from "react";
import { Options } from "./sub";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onConfirm: (year?: number, month?: number, date?: number) => void;
  onReset: () => void;
}

const Filter: FC<Props> = ({ isOpen, onClose, onOpen, onConfirm, onReset }) => {
  const currentYear = new Date().getFullYear();
  const years: { label: number | string; value: undefined | number }[] = [
    { label: "Năm", value: undefined },
  ];
  for (let i = 0; i <= 30; i++) {
    const year = currentYear - i;
    years.push({ label: year, value: year });
  }

  const months: { label: number | string; value: undefined | number }[] = [
    { label: "Tháng", value: undefined },
    { label: "Tháng 1", value: 1 },
    { label: "Tháng 2", value: 2 },
    { label: "Tháng 3", value: 3 },
    { label: "Tháng 4", value: 4 },
    { label: "Tháng 5", value: 5 },
    { label: "Tháng 6", value: 6 },
    { label: "Tháng 7", value: 7 },
    { label: "Tháng 8", value: 8 },
    { label: "Tháng 9", value: 9 },
    { label: "Tháng 10", value: 10 },
    { label: "Tháng 11", value: 11 },
    { label: "Tháng 12", value: 12 },
  ];

  const dates: { label: number | string; value: undefined | number }[] = [
    { label: "Ngày", value: undefined },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 },
    { label: 11, value: 11 },
    { label: 12, value: 12 },
    { label: 13, value: 13 },
    { label: 14, value: 14 },
    { label: 15, value: 15 },
    { label: 16, value: 16 },
    { label: 17, value: 17 },
    { label: 18, value: 18 },
    { label: 19, value: 19 },
    { label: 20, value: 20 },
    { label: 21, value: 21 },
    { label: 22, value: 22 },
    { label: 23, value: 23 },
    { label: 24, value: 24 },
    { label: 25, value: 25 },
    { label: 26, value: 26 },
    { label: 27, value: 27 },
    { label: 28, value: 28 },
    { label: 29, value: 29 },
    { label: 30, value: 30 },
    { label: 31, value: 31 },
  ];

  const [timeYear, setTimeYear] = useState<{
    label: number | string;
    value: undefined | number;
  }>(years[0]);

  const [timeMonth, setTimeMonth] = useState<{
    label: number | string;
    value: undefined | number;
  }>(months[0]);

  const [timeDate, setTimeDate] = useState<{
    label: number | string;
    value: undefined | number;
  }>(dates[0]);

  const handleChangeTimeYear = (year: {
    label: number | string;
    value: undefined | number;
  }) => {
    setTimeYear(year);
  };
  const handleChangeTimeMonth = (year: {
    label: number | string;
    value: undefined | number;
  }) => {
    setTimeMonth(year);
  };

  const handleChangeTimeDate = (year: {
    label: number | string;
    value: undefined | number;
  }) => {
    setTimeDate(year);
  };

  const handleConfirm = () => {
    onConfirm(timeYear.value, timeMonth.value, timeDate.value);
  };

  const handleReset = () => {
    onReset();
    onClose();
  };

  useEffect(() => {
    if (timeYear.value === undefined) {
      setTimeMonth(months[0]);
      setTimeDate(dates[0]);
    }
    if (timeMonth.value === undefined) {
      setTimeDate(dates[0]);
    }
  }, [timeMonth, timeYear]);

  return (
    <>
      <div className="px-2.5 py-2 rounded-lg bg-surface dark:bg-surfaceDark">
        <div className="flex justify-between">
          <h2 className="text-2024 font-bold text-primaryText dark:text-primaryTextDark">
            Bài viết
          </h2>

          <div
            className="flex items-center px-3 h-9 rounded-md bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 cursor-pointer"
            onClick={onOpen}
          >
            <span className="flex items-center mx-1">
              <FilterPostIcon />
            </span>
            <span className="mx-1 text-1520 font-bold text-primaryText dark:text-primaryTextDark">
              Bộ lọc
            </span>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} wrapperId="filter-post">
        <div className="fixed inset-0 bg-white/50 dark:bg-black/50 z-20">
          <div className="relative w-full h-full">
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[550px] rounded-lg bg-surface dark:bg-surfaceDark border border-divider dark:border-dividerDark">
              <div className="relative flex justify-center items-center h-[60px] border-b border-divider dark:border-dividerDark">
                <h2 className="text-2024 font-bold text-primaryText dark:text-primaryTextDark">
                  Bộ lọc bài viết
                </h2>

                <div
                  className="absolute top-3 right-3 flex justify-center items-center w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer text-secondaryIcon dark:text-secondaryIconDark"
                  onClick={onClose}
                >
                  <CloseIcon />
                </div>
              </div>

              <div className="px-4 pt-5 pb-1">
                <div className="flex">
                  <div className="mr-3">
                    <span className="text-1520 text-primaryText dark:text-primaryTextDark">
                      Đi đến:
                    </span>
                  </div>

                  <Options
                    value={timeYear}
                    onChange={handleChangeTimeYear}
                    list={years}
                  />

                  {!!timeYear.value && (
                    <div className="ml-2">
                      <Options
                        value={timeMonth}
                        onChange={handleChangeTimeMonth}
                        list={months}
                      />
                    </div>
                  )}

                  {!!timeMonth.value && !!timeYear.value && (
                    <div className="ml-2">
                      <Options
                        value={timeDate}
                        onChange={handleChangeTimeDate}
                        list={dates}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end pb-3 px-3">
                <div className="mx-1">
                  <div className="flex gap-2">
                    <div
                      className="flex items-center h-9 px-4 bg-black/20 dark:bg-white/20 rounded-md cursor-pointer"
                      onClick={handleReset}
                    >
                      <span className="text-1418 text-primaryText dark:text-primaryTextDark font-semibold">
                        Xóa
                      </span>
                    </div>
                    <div
                      className="flex items-center h-9 px-10 bg-primary rounded-md cursor-pointer"
                      onClick={handleConfirm}
                    >
                      <span className="text-white font-semibold text-1418">
                        Xong
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Filter;
