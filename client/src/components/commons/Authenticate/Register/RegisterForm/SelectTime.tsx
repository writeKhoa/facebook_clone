import { FC } from "react";

interface Props {
  type: "date" | "month" | "year";
  name: string;
  value: string | number;
  onChange: (e: any) => void;
}

const SelectTime: FC<Props> = ({ type, name, value, onChange }) => {
  const date = new Date();
  let markTime: string | number = 0;
  let timeOptions: number[] | string[] | { label: string; value: number }[] =
    [];

  const generateYears = (yearCurrent: number, timeOptions: number[]) => {
    const pastYear = yearCurrent - 100;
    for (let i = yearCurrent; i > pastYear; i--) {
      timeOptions.push(i);
    }
    return timeOptions;
  };

  if (type === "date") {
    markTime = date.getDate();
    timeOptions = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
  } else if (type === "month") {
    timeOptions = [
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
    markTime = timeOptions[date.getMonth()].value;
  } else {
    const markTime = date.getFullYear();
    timeOptions = generateYears(markTime, []);
  }

  if (type === "month") {
    return (
      <select
        value={value}
        name={name}
        className="w-[125px] h-9 border-[1px] border-border pl-2 pr-5 rounded focus:outline-none cursor-pointer"
        onChange={onChange}
      >
        {timeOptions.map((time: any) => {
          const { value, label } = time;
          return (
            <option value={value} key={value}>
              {label}
            </option>
          );
        })}
      </select>
    );
  }

  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-[125px] h-9 border-[1px] border-border pl-2 pr-5 rounded-md focus:outline-none cursor-pointer"
    >
      {timeOptions.map((time: any) => {
        return (
          <option value={time} key={time}>
            {time}
          </option>
        );
      })}
    </select>
  );
};

export default SelectTime;
