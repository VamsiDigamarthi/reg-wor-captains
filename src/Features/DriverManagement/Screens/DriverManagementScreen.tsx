import { useSelector } from "react-redux";
import Table from "../Components/Table";
import TableFilterCard from "../Components/TableFilterCard";
import { useDriverManagementScreenHook } from "../Hooks/DriverManagementScreen";
import { RootState } from "../../../Redux/store";
import DriverProfileScreen from "./DriverProfileScreen";
import NoDriver from "../Components/NoDriver";
// import DriverProfileScreen from "./DriverProfileScreen";

const DriverManagementScreen = () => {
  const { columns, data, searchDrivers, handleChangeOnAndOfDutty } =
    useDriverManagementScreenHook();

  const { isDisplayDriverListOrItem } = useSelector(
    (state: RootState) => state.isDisplayDriverListorItem
  );

  return (
    <div className="flex flex-col gap-9 p-4">
      {isDisplayDriverListOrItem ? (
        <DriverProfileScreen />
      ) : (
        <div className="bg-white shadow-custom rounded-md p-6 h-[550px] flex flex-col gap-4">
          <TableFilterCard
            text="Drivers Management"
            subtext="Manage Your Ride Details"
            searchDrivers={searchDrivers}
            changeOnOffDutty={handleChangeOnAndOfDutty}
          />
          {data?.length ? (
            <Table columns={columns} data={data} />
          ) : (
            <NoDriver />
          )}
        </div>
      )}
    </div>
  );
};

export default DriverManagementScreen;
