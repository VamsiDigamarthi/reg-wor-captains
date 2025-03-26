import { LucideIcon } from "lucide-react";
import Button from "../../../SharedComponents/Button";
import { FC } from "react";

type NotificationCardType = {
  iconBg: string;
  iconColor: string;
  Icon: LucideIcon;
};

const NotificationCard: FC<NotificationCardType> = ({
  Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="w-full flex justify-between items-center border p-3 rounded-md">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div
            style={{ backgroundColor: iconBg }}
            className="w-[50px] h-[50px] bg-gray-100 rounded-full flex justify-center items-center"
          >
            <Icon color={iconColor} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-roboto font-semibold">
              Payment Issue Detected
            </h2>
            <span className="text-[11px] font-normal font-roboto -mt-1">
              User #123 requested a refund for Transaction #456
            </span>
            <div className="flex items-center gap-4">
              <span className=" bg-[#ffefc3] rounded-2xl flex justify-center items-center text-base font-roboto text-[#854D0E] px-2 py-1">
                20 Pending
              </span>
              <span className=" bg-[#ffefc3] rounded-2xl flex justify-center items-center text-base font-roboto text-[#854D0E] px-2 py-1">
                20 Pending
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button bgColor="#2563EB" text="View Details" textColor="#fff" />
          <Button
            bgColor="#fff"
            text="Mark as Read"
            textColor="#000"
            isApplyBorder={true}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
