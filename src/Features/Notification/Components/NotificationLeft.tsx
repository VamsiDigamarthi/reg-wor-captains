import NotificationCard from "./NotificationCard";
import { RefreshCcw, TriangleAlert, User } from "lucide-react";

const NotificationLeft = () => {
  return (
    <div className="w-[60%] h-full overflow-y-auto flex flex-col gap-4">
      <NotificationCard
        Icon={TriangleAlert}
        iconBg="#FEE2E2"
        iconColor="#DC2626"
      />

      <NotificationCard
        Icon={RefreshCcw}
        iconBg="#DBEAFE"
        iconColor="#2563EB"
      />

      <NotificationCard Icon={User} iconBg="#DCFCE7" iconColor="#16A34A" />
    </div>
  );
};

export default NotificationLeft;
