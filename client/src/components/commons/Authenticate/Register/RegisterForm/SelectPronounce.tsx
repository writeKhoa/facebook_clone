import { FC } from "react";

interface Pronounce {
  value: "0" | "1" | "2";
  label: string;
}

interface Props {
  name: string;
  onChange: (e: any) => void;
  value: string;
}

const SelectPronouce: FC<Props> = ({ name, onChange, value }) => {
  const pronounces: Pronounce[] = [
    {
      value: "0",
      label: 'Cô ấy: "Chúc cô ấy sinh nhật vui vẻ" ',
    },
    {
      value: "1",
      label: 'Anh ấy: "Chúc anh ấy sinh nhật vui vẻ" ',
    },
    {
      value: "2",
      label: 'Họ: "Chúc họ sinh nhật vui vẻ"',
    },
  ];

  return (
    <select
      id={name}
      name={name}
      value={value}
      className="w-full h-9 border border-divider rounded-md pl-2 pr-5"
      onChange={onChange}
    >
      <option disabled value="-1">
        Chọn danh xưng
      </option>
      {pronounces.map((pronounce) => {
        const { value, label } = pronounce;
        return (
          <option value={value} key={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectPronouce;
