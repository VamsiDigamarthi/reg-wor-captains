const NewCompletedDriverCard = () => {
  return (
    <div className="p-2 bg-white rounded-md flex justify-between items-center gap-4">
      <button className="w-1/2 bg-[#e02e88] text-white p-2 rounded-md">
        New Notifications
      </button>
      <button className="w-1/2 shadow-secondShadow p-2 rounded-md">
        Completed
      </button>
    </div>
  );
};

export default NewCompletedDriverCard;
