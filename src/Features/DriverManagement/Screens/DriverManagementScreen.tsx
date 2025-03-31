import { useSelector } from "react-redux";
import Table from "../Components/Table";
import TableFilterCard from "../Components/TableFilterCard";
import { useDriverManagementScreenHook } from "../Hooks/DriverManagementScreen";
import { RootState } from "../../../Redux/store";
import DriverProfileScreen from "./DriverProfileScreen";
import NoDriver from "../Components/NoDriver";
import ReactPaginate from "react-paginate";
import { RingLoader } from "react-spinners";
// import DriverProfileScreen from "./DriverProfileScreen";

const DriverManagementScreen = () => {
  const {
    columns,
    data,
    searchDrivers,
    handleChangeOnAndOfDutty,
    totalPages,
    handlePageClick,
    loading,
  } = useDriverManagementScreenHook();

  const { isDisplayDriverListOrItem } = useSelector(
    (state: RootState) => state.isDisplayDriverListorItem
  );

  return (
    <div className="flex flex-col gap-9 p-4">
      {isDisplayDriverListOrItem ? (
        <DriverProfileScreen />
      ) : (
        <div className="bg-white shadow-custom rounded-md p-6 h-[600px] flex flex-col gap-4">
          <TableFilterCard
            text="Drivers Management"
            subtext="Manage Your Ride Details"
            searchDrivers={searchDrivers}
            changeOnOffDutty={handleChangeOnAndOfDutty}
          />
          {data?.length ? (
            <>
              {/* {loading ? (
                <div className="w-full h-[300px] flex justify-center items-center">
                  <RingLoader />
                </div>
              ) : ( */}
              <>
                <Table columns={columns} data={data} />
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"flex justify-center space-x-2"}
                  pageClassName={
                    "px-4 py-2 border rounded bg-gray-200 cursor-pointer"
                  }
                  activeClassName={"bg-pink-500 text-white"}
                  previousClassName={"px-4 py-2 border rounded bg-gray-200"}
                  nextClassName={"px-4 py-2 border rounded bg-gray-200"}
                  breakClassName={"px-4 py-2"}
                />
              </>
              {/* )} */}
            </>
          ) : (
            <NoDriver />
          )}
        </div>
      )}
    </div>
  );
};

export default DriverManagementScreen;
