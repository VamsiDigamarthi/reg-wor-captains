import { useDispatch, useSelector } from "react-redux";
import { WorUser } from "../../DashBoard/Types/regCaptain.type";
import { ColumnNameType } from "../types/DriverModal.type";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import {
  fetchWorUsers,
  setWorUser,
} from "../../DashBoard/Redux/reCaptainSlice";
import { CopyPlus } from "lucide-react";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";
import { changeDriverListOrItemComponent } from "../Slice/isDisplayDriverListOrDriverDetails.slice";

export const useDriverManagementScreenHook = () => {
  const dispatch: AppDispatch = useDispatch();
  const { worUsers } = useSelector((state: RootState) => state.worUser);
  const [filterUser, setFilterUser] = useState<WorUser[]>([]);
  const handleAction = () => {
    dispatch(drawerOpenCloseModalFunc(true));
  };

  const handleOpenProfile = () => {
    dispatch(changeDriverListOrItemComponent());
  };

  const columns: ColumnNameType<WorUser>[] = [
    {
      name: "Driver Name",
      width: "20%",
      render: (row) => (
        <div onClick={handleOpenProfile} className="flex items-center gap-2">
          <img
            src={row.profilePic || "default.jpg"}
            alt="Driver"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-base text-black font-roboto">{row.name}</span>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-500 font-roboto -mt-1">
                {row.mobile}
              </span>
              <span
                style={{ backgroundColor: row?.onDuty ? "green" : "red" }}
                className="w-[10px] h-[10px] rounded-full -mt-1"
              ></span>
            </div>
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
      render: (row) => <span>{0}$</span>,
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
    if (worUsers) {
      fetchExstUser();
      setFilterUser(worUsers);
    }
  }, [worUsers]);

  const searchDrivers = (text: string) => {
    console.log("text", text);

    if (!text.trim()) {
      setFilterUser(worUsers); // Return all users if search text is empty
    }
    setFilterUser(
      worUsers.filter((user) =>
        [user.name, user.mobile, user.email].some((field) =>
          field?.toLowerCase().includes(text.toLowerCase())
        )
      )
    );
  };

  // select ON-DUTTY or OFF-DUTTY

  const handleChangeOnAndOfDutty = (type: string) => {
    if (type === "All") {
      setFilterUser(worUsers);
    } else if (type === "ON-Dutty") {
      setFilterUser(worUsers?.filter((user) => user.onDuty === true));
    } else if (type === "OFF-Dutty") {
      setFilterUser(worUsers?.filter((user) => user.onDuty === false));
    }
  };

  return {
    columns,
    data: filterUser,
    searchDrivers,
    handleChangeOnAndOfDutty,
  };
};
