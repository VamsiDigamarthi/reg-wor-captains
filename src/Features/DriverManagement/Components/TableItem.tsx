import { FC } from "react";
import { ColumnNameType } from "../types/DriverModal.type";
import { WorUser } from "../../DashBoard/Types/regCaptain.type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { setWorUser } from "../../DashBoard/Redux/reCaptainSlice";

const TableRow: FC<{
  row: WorUser;
  columns: ColumnNameType<WorUser>[];
}> = ({ row, columns }) => {
  const dispatch: AppDispatch = useDispatch();

  const { worUser } = useSelector((state: RootState) => state.worUser);

  const handleSetWorUser = () => {
    localStorage.setItem("worUser", JSON.stringify(row));
    dispatch(setWorUser(row));
  };

  return (
    <div
      style={{ backgroundColor: row._id === worUser?._id ? "#fcf0f6" : "" }}
      className="text-base flex items-center px-3 h-[48px] border-b border-b-gray-200 cursor-pointer relative"
      onClick={handleSetWorUser}
    >
      {columns.map((column, index) => (
        <div key={index} style={{ width: column.width }}>
          {column.render ? column.render(row) : null}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
