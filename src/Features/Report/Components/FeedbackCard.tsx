const FeedbackCard = () => {
  return (
    <div className="w-full p-4 border border-secondBorerColor flex items-start justify-between rounded-md">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-[25px] h-[25px] rounded-full bg-red-100"></div>
          <span className="text-[13px] font-semibold font-poppings">
            Anjali Rao
          </span>
        </div>
        <p className="text-[13px] font-normal font-poppings">
          Very polite and helpful driver. Always on time.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
