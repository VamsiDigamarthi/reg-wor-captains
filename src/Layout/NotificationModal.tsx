import { Ellipsis } from "lucide-react";
import NotificationItemCard from "../SharedComponents/NotificationItemCard";
import Button from "../SharedComponents/Button";

const NotificationModal = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-base font-roboto font-normal">Notification</h2>
        <Ellipsis />
      </div>
      <NotificationItemCard />
      <NotificationItemCard />
      <NotificationItemCard />
      <Button bgColor="#e02e88" text="Show All Notification" textColor="#fff" />
    </>
  );
};

export default NotificationModal;
