import DashboardGraphs from "../Components/DashboardGraphs";
import RiderCountCard from "../Components/RiderCountCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-9 p-4">
      <RiderCountCard />
      <DashboardGraphs />
    </div>
  );
};

export default Dashboard;
