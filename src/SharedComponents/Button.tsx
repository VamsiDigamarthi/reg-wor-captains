import { FC } from "react";
import { ClockLoader } from "react-spinners";
type ButtonType = {
  text: string;
  bgColor: string;
  textColor: string;
  isApplyBorder?: boolean;
  onClick?: () => void;
  isLoading: boolean;
};

const Button: FC<ButtonType> = ({
  text,
  bgColor,
  textColor,
  isApplyBorder,
  onClick,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: isApplyBorder ? "1px solid gray" : "",
      }}
      className="py-2 bg-blue-100 rounded-md px-4 flex justify-center items-center"
    >
      {isLoading ? <ClockLoader color="#fff" size={30} /> : text}
    </button>
  );
};

export default Button;
