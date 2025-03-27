import PaymentManagementFirst from "../../ResWorCaptins/Components/PaymentManagementFirst";

import NotificationLeft from "../Components/NotificationLeft";
import NotificationRight from "../Components/NotificationRight";

const NotificationScreen = () => {
  return (
    <div className="flex flex-col gap-4 p-4 ">
      <div className="w-full shadow-secondShadow bg-white rounded-md  px-8 py-5  flex flex-col gap-6">
        <PaymentManagementFirst
          approvedDrivers={20}
          pendingDrivers={10}
          rejectDrivers={2}
          subtext="You can View all your Notifications here"
          text="Notification"
        />
        <div className="w-full flex justify-between items-start gap-4 h-[550px]">
          <NotificationLeft />
          <NotificationRight />
        </div>
      </div>
    </div>
  );
};

export default NotificationScreen;
