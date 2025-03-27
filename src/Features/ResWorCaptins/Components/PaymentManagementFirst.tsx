import { FC } from "react";
import SearchCard from "../../../SharedComponents/SearchCard";

type PaymentManagementFirstType = {
  text: string;
  subtext: string;
  pendingDrivers: number;
  approvedDrivers: number;
  rejectDrivers: number;
};

const PaymentManagementFirst: FC<PaymentManagementFirstType> = ({
  text,
  subtext,
  pendingDrivers,
  approvedDrivers,
  rejectDrivers,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-roboto font-semibold text-[#e02e88]">
            {text}
          </h2>
          <span className="text-base text-gray-500">{subtext}</span>
        </div>
        <div className="flex items-center gap-4">
          <SearchCard />
          <span className="w-[120px] h-[45px] bg-[#ffefc3] rounded-lg flex justify-center items-center text-base font-roboto text-[#854D0E]">
            {pendingDrivers} Pending
          </span>
          <span className="w-[120px] h-[45px] bg-[#dcfce7] rounded-lg flex justify-center items-center text-base font-roboto text-[#166534]">
            {approvedDrivers} Approved
          </span>
          <span className="w-[120px] h-[45px] bg-[#fee2e2] rounded-lg flex justify-center items-center text-base font-roboto text-[#991B1B]">
            {rejectDrivers} Reject
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagementFirst;
