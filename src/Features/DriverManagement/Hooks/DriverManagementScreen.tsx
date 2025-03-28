import { useDispatch, useSelector } from "react-redux";
import { WorUser } from "../../DashBoard/Types/regCaptain.type";
import { ColumnNameType } from "../types/DriverModal.type";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect } from "react";
import {
  fetchWorUsers,
  setWorUser,
} from "../../DashBoard/Redux/reCaptainSlice";
import { CopyPlus } from "lucide-react";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";

export const useDriverManagementScreenHook = () => {
  const dispatch: AppDispatch = useDispatch();
  const { worUsers } = useSelector((state: RootState) => state.worUser);

  const handleAction = () => {
    dispatch(drawerOpenCloseModalFunc(true));
  };

  const columns: ColumnNameType<WorUser>[] = [
    {
      name: "Driver Name",
      width: "20%",
      render: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.profilePic || "default.jpg"}
            alt="Driver"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-base text-black font-roboto">{row.name}</span>
            <span className="text-sm text-gray-500 font-roboto -mt-1">
              {row.mobile}
            </span>
          </div>
        </div>
      ),
    },
    {
      name: "Contact",
      width: "17%",
      render: (row) => (
        <div className="flex flex-col">
          <span className="text-base text-black font-roboto">{row.mobile}</span>
          <span className="text-sm text-gray-500 font-roboto -mt-1">
            {row.email}
          </span>
        </div>
      ),
    },
    {
      name: "Vehicle Info",
      width: "15%",
      render: (row) => (
        <div className="flex flex-col">
          {row.services.map((service, idx) => (
            <span
              key={idx}
              className={`text-base text-black font-roboto ${
                idx === 1 ? "-mt-1 text-sm text-gray-500" : ""
              }`}
            >
              {service.makerModel || "N/A"}
            </span>
          ))}
        </div>
      ),
    },
    {
      name: "Signup Date",
      width: "15%",
      render: (row) => <span>{row.createdAt?.slice(0, 10)}</span>,
    },
    {
      name: "Ride Completion",
      width: "15%",
      render: (row) => <span>{row.createdAt?.slice(0, 10)}</span>,
    },
    {
      name: "Total Earnings",
      width: "11%",
      render: (row) => <span>{row.services.length * 100}$</span>,
    },
    {
      name: "Action",
      width: "7%",
      render: (row) => (
        <span className="relative z-40" onClick={handleAction}>
          <CopyPlus />
        </span>
      ),
    },
  ];

  // const data: WorUser[] = [
  //   {
  //     name: "John Doe",
  //     mobile: "1234567890",
  //     profilePic: null,
  //     email: "john@example.com",
  //     services: [
  //       { rcNumber: "AB1234", makerModel: "Tesla Model S" },
  //       { rcNumber: "XY5678", makerModel: "Toyota Prius" },
  //     ],
  //     createAt: "2025-03-26",
  //   },
  //   {
  //     name: "kjhgfd Doe",
  //     mobile: "oyfyknm",
  //     profilePic: null,
  //     email: "john@example.com",
  //     services: [
  //       { rcNumber: "AB1234", makerModel: "Tesla Model S" },
  //       { rcNumber: "XY5678", makerModel: "Toyota Prius" },
  //     ],
  //     createAt: "2025-03-26",
  //   },
  // ];

  const fetchExstUser = () => {
    const storedUser = localStorage.getItem("worUser");
    const user = storedUser ? JSON.parse(storedUser) : null;

    const exists = worUsers?.find((item: WorUser) => item?._id === user?._id);
    if (exists) {
      dispatch(setWorUser(exists));
    } else {
      dispatch(setWorUser(worUsers[0]));
    }
  };

  useEffect(() => {
    dispatch(fetchWorUsers());
  }, []);

  useEffect(() => {
    worUsers && fetchExstUser();
  }, [worUsers]);

  return {
    columns,
    data: worUsers,
  };
};
