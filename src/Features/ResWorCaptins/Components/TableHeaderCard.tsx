import SearchCard from "../../../SharedComponents/SearchCard";

const TableHeaderCard = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h2 className="text-xl text-primary font-roboto font-semibold">
          Driver Management
        </h2>
        <span className="text-gray-500 text-[14px]">
          Manage Your Ride Details
        </span>
      </div>
      <div className="flex items-center gap-4">
        <SearchCard />
      </div>
    </div>
  );
};

export default TableHeaderCard;
