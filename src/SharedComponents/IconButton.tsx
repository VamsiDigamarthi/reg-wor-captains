import { LucideIcon } from "lucide-react";
import { FC } from "react";

type IconButtonType = {
  bgColor: string;
  text: string;
  Icon: LucideIcon;
};

const IconButton: FC<IconButtonType> = ({ bgColor, text, Icon }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="px-4 py-2 flex gap-2 items-center rounded-2xl"
    >
      <Icon className="w-5 h-5 text-white" />
      <p className="text-white font-roboto font-normal text-lg">{text}</p>
    </button>
  );
};

export default IconButton;
