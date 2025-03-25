import TableHeaderCard from "../Components/TableHeaderCard";

const DriverManagementScreen = () => {
  return (
    <div className="flex flex-col gap-9 p-4">
      <div className="bg-white shadow-custom rounded-md p-6 h-[500px]">
        <TableHeaderCard />
      </div>
    </div>
  );
};

export default DriverManagementScreen;
