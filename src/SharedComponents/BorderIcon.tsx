import React from "react";
import { LucideIcon } from "lucide-react";

interface BorderIconProps {
  Icon: LucideIcon;
  onClick?: () => void;
}

const BorderIcon: React.FC<BorderIconProps> = ({ Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[40px] h-[40px] rounded-full flex justify-center items-center border border-gray-400"
    >
      <Icon className="w-5 h-5 text-gray-400" />
    </button>
  );
};

export default BorderIcon;
