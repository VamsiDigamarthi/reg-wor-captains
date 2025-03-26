import DriverPaymnetIssueCard from "./DriverPaymnetIssueCard";
import NewCompletedDriverCard from "./NewCompletedDriverCard";

const PaymentLeftSide = () => {
  return (
    <div className="w-1/3 rounded-md bg-[#f7f7f7] p-2">
      <NewCompletedDriverCard />
      <div className="w-full h-[590px] overflow-y-auto">
        <DriverPaymnetIssueCard />
        <DriverPaymnetIssueCard />

        <DriverPaymnetIssueCard />
        <DriverPaymnetIssueCard />
        <DriverPaymnetIssueCard />
        <DriverPaymnetIssueCard />
      </div>
    </div>
  );
};

export default PaymentLeftSide;
