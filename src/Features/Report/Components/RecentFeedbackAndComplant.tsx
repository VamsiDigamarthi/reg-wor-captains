import FeedbackCard from "./FeedbackCard";

const RecentFeedbackAndComplant = () => {
  return (
    <div className="w-full bg-white shadow-secondShadow p-4 rounded-md flex flex-col gap-4">
      <h2 className="text-[14px] font-semibold font-poppings">
        Recent Feedback & Complaints
      </h2>
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
    </div>
  );
};

export default RecentFeedbackAndComplant;
