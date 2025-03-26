import { FC } from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableItem";
import { ColumnNameType } from "../types/DriverModal.type";
import { WorUser } from "../../DashBoard/Types/regCaptain.type";

type TableTypes = {
  columns: ColumnNameType<WorUser>[];
  data: WorUser[];
};

const Table: FC<TableTypes> = ({ columns, data }) => {
  return (
    <div className="w-full h-[85%] shadow-secondShadow rounded-md">
      <TableHeader columns={columns} />
      {data.map((row, index) => (
        <TableRow key={index} row={row} columns={columns} />
      ))}
    </div>
  );
};

export default Table;
