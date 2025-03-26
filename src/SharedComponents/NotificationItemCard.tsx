const NotificationItemCard = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-[50px] h-[50px] bg-gray-100 rounded-full"></div>
        <div className="flex flex-col">
          <h2 className="text-base font-roboto font-semibold">
            Payment Issues
          </h2>
          <p className="text-gray-300 text-sm font-roboto font-normal">20</p>
        </div>
      </div>
      <span className="text-base text-gray-500 font-roboto font-normal">
        Now
      </span>
    </div>
  );
};

export default NotificationItemCard;
