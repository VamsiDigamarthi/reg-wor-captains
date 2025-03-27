import { ArrowUpFromLine, LucideIcon } from "lucide-react";
import { FC } from "react";
import IconWithBgCard from "./IconWithBgCard";

type RiderCountSingleCardType = {
  text: string;
  count: number;
  icon: LucideIcon;
  percentage: number;
};

const RiderCountSingleCard: FC<RiderCountSingleCardType> = ({
  text,
  count,
  icon,
  percentage,
}) => {
  return (
    <div className="w-[260px] p-5 rounded-lg shadow-custom  flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-roboto font-normal text-gray">
            {text}
          </p>
          <h1 className="text-xl font-roboto font-semibold">{count}</h1>
        </div>
        <IconWithBgCard bgColor="#DBEAFE" Icon={icon} />
      </div>
      <div className="flex items-center gap-1">
        <ArrowUpFromLine size={16} />
        <span className="text-green-500 text-lg font-roboto font-semibold">
          {percentage}%
        </span>
        <span className="text-gray ">vs last month</span>
      </div>
    </div>
  );
};

export default RiderCountSingleCard;
