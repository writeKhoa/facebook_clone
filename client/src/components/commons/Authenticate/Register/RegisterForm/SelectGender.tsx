import { FC } from "react";

type Props = {
  name: string;
  value?: number;
  onChange: (e: any) => void;
};

const SelectGender: FC<Props> = ({ name, onChange, value }) => {
  const optionGenders = [
    { value: 0, label: "Nữ" },
    { value: 1, label: "Nam" },
    { value: 2, label: "Tùy chỉnh" },
  ];
  return (
    <>
      {optionGenders.map((gender) => {
        const { value: valueGender, label } = gender;
        return (
          <span
            key={valueGender}
            className="relative inline-block grow h-9 mx-[6px] mb-[6px] bg-white font-normal border-page-auth rounded text-left"
          >
            <label
              htmlFor={String(valueGender)}
              className="inline-block w-full h-full pl-[10px] pr-[28px] font-normal text-1536 align-middle  cursor-pointer not-copy"
            >
              {label}
            </label>
            <input
              id={String(valueGender)}
              type="radio"
              onChange={onChange}
              value={valueGender}
              checked={Number(value) === valueGender}
              name={name}
              className="absolute h-9 top-0 right-[10px] text-1236"
            />
          </span>
        );
      })}
    </>
  );
};

export default SelectGender;
