import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface IconWithBgCardProps {
  Icon: LucideIcon;
  bgColor: string;
}

const IconWithBgCard: FC<IconWithBgCardProps> = ({ Icon, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="p-3 rounded-lg">
      <Icon className="w-5 h-5 text-gray-400" />
    </div>
  );
};

export default IconWithBgCard;
