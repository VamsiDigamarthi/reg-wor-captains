import { CreditCard, TriangleAlert, User } from "lucide-react";
import NotficationIssueCard from "./NotficationIssueCard";

const NotificationRight = () => {
  return (
    <div className="w-[40%] shadow-secondShadow  p-4 bg-white rounded-md flex flex-col gap-4">
      <h2 className="text-base font-roboto font-semibold">Quick Start</h2>
      <div className="w-full p-4 flex justify-between items-center bg-[#F9FAFB] rounded-md">
        <span className="text-base font-roboto ">Total Notifications</span>
        <h2 className="text-lg font-roboto font-semibold">34</h2>
      </div>
      <div className="w-full p-4 flex justify-between items-center bg-[#EFF6FF] rounded-md">
        <span className="text-base font-roboto text-[#2563EB] ">
          Unread Notifications
        </span>
        <h2 className="text-lg font-roboto font-semibold text-[#2563EB]">12</h2>
      </div>
      <h2 className="text-base font-roboto font-semibold">Categories</h2>

      <NotficationIssueCard
        Icon={CreditCard}
        text="Payment Issues"
        count={80}
      />

      <NotficationIssueCard Icon={User} text="Profile Approvals" count={20} />
      <NotficationIssueCard
        Icon={TriangleAlert}
        text="System Alerts"
        count={50}
      />
    </div>
  );
};

export default NotificationRight;
