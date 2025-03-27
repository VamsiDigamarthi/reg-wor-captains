import Table from "../Components/Table";
import TableFilterCard from "../Components/TableFilterCard";
import { useDriverManagementScreenHook } from "../Hooks/DriverManagementScreen";
// import DriverProfileScreen from "./DriverProfileScreen";

const DriverManagementScreen = () => {
  const { columns, data } = useDriverManagementScreenHook();

  return (
    <div className="flex flex-col gap-9 p-4">
      <div className="bg-white shadow-custom rounded-md p-6 h-[550px] flex flex-col gap-4">
        <TableFilterCard
          text="Drivers Management"
          subtext="Manage Your Ride Details"
        />
        <Table columns={columns} data={data} />
      </div>
      {/* <DriverProfileScreen /> */}
    </div>
  );
};

export default DriverManagementScreen;
