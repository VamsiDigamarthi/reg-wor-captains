import RiderCountCard from "../../../SharedComponents/RiderCountCard";
import DashboardGraphs from "../Components/DashboardGraphs";
import { useDashboardHook } from "../Hooks/Dashboard.hook";

const Dashboard = () => {
  useDashboardHook();

  return (
    <div className="flex flex-col gap-9 p-4">
      <RiderCountCard />
      <DashboardGraphs />
    </div>
  );
};

export default Dashboard;
