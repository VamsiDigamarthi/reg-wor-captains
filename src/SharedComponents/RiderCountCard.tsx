import { Check, CircleAlert, Clock10, User } from "lucide-react";
import RiderCountSingleCard from "./RiderCountSingleCard";

const RiderCountCard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-between items-center">
      <RiderCountSingleCard
        text="Total Drivers"
        count={22}
        icon={User}
        percentage={12}
      />
      <RiderCountSingleCard
        text="Active Drivers"
        count={52}
        icon={Check}
        percentage={23}
      />
      <RiderCountSingleCard
        text="In-Active Drivers"
        count={22}
        icon={CircleAlert}
        percentage={12}
      />
      <RiderCountSingleCard
        text="Pending Approvals"
        count={34}
        icon={Clock10}
        percentage={78}
      />
    </div>
  );
};

export default RiderCountCard;
