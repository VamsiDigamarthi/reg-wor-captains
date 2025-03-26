import { FC } from "react";
import { ColumnNameType } from "../types/DriverModal.type";

const TableHeader: FC<{ columns: ColumnNameType<any>[] }> = ({ columns }) => {
  return (
    <div className="w-full h-[45px] bg-[#f7f7f7] overflow-hidden flex items-center px-3 py-5">
      {columns.map((column, index) => (
        <span
          key={index}
          className="text-[#64748b] text-base font-semibold font-roboto"
          style={{ width: column.width || "auto" }}
        >
          {column.name}
        </span>
      ))}
    </div>
  );
};

export default TableHeader;
