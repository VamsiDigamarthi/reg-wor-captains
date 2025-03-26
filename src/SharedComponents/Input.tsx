import { FC } from "react";
import { Info } from "lucide-react";

type InputProps = {
  label: string;
  type?: "text" | "email" | "password" | "number" | "date";
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
};

const Input: FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error,
  name,
  disabled = false,
}) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-sm font-roboto mb-1">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className="w-full h-[45px] border border-gray-400 rounded-md outline-none px-2 text-base"
        disabled={disabled}
      />

      {error && (
        <span className="flex items-center gap-1 text-[10px] mt-1 text-red-500">
          <Info size={15} color="red" />
          <span>{error}</span>
        </span>
      )}
    </div>
  );
};

export default Input;
