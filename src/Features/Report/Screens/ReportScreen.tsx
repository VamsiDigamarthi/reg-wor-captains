import RiderCountCard from "../../../SharedComponents/RiderCountCard";
import TableFilterCard from "../../DriverManagement/Components/TableFilterCard";
import RatingDistribution from "../Components/RatingDistribution";
import RecentFeedbackAndComplant from "../Components/RecentFeedbackAndComplant";
import TopPerformanceDriver from "../Components/TopPerformanceDriver";

const ReportScreen = () => {
  return (
    <div className="flex flex-col gap-6 p-4 ">
      <RiderCountCard />
      <div className="w-full flex justify-between items-center gap-4">
        <TopPerformanceDriver />
        <RatingDistribution />
      </div>
      <RecentFeedbackAndComplant />
      <div className="bg-white shadow-custom rounded-md p-6 h-[550px] flex flex-col gap-4">
        <TableFilterCard
          subtext="You can Management your Reports"
          text="Reports Management"
        />
      </div>
    </div>
  );
};

export default ReportScreen;
