import BarChatCard from "./BarChatCard";
import LineChatCard from "./LineChatCard";

const DashboardGraphs = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <BarChatCard />
      <LineChatCard />
    </div>
  );
};

export default DashboardGraphs;
