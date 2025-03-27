import { FC } from "react";

type SelectTagProps = {
  options: string[];
  firstOptionText: string;
  onChange: (value: string) => void;
};

const SelectTag: FC<SelectTagProps> = ({
  options,
  firstOptionText,
  onChange,
}) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="border border-borderColor rounded-md px-4 h-[45px] outline-none w-[200px] text-gray-600"
    >
      <option value="" disabled selected>
        {firstOptionText}
      </option>
      {options?.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectTag;
