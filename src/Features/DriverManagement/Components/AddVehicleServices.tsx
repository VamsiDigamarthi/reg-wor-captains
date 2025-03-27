import { useEffect, useState } from "react";
import Button from "../../../SharedComponents/Button";
import SelectTag from "../../../SharedComponents/SelectTag";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { addServices } from "../Services/addServices.serv";
import {
  fetchWorUsers,
  setWorUser,
} from "../../DashBoard/Redux/reCaptainSlice";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";

const servicesType = [
  "scooty",
  "car",
  "bookany",
  "auto",
  "wor-premium",
  "parcel",
];
const AddVehicleServices = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUser } = useSelector((state: RootState) => state.worUser);

  const [serviceType, setServiceType] = useState<string | null>(null);
  const [errors, setErrors] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSeletTag = (value: string) => {
    setServiceType(value);
  };

  const handleSudmitTask = async () => {
    if (!serviceType) {
      setErrors("serviceType are required");
      return;
    }
    setIsLoading(true);
    setErrors("");
    const apiRes = await addServices({
      mobile: worUser?.mobile ?? "",
      serviceType,
    });
    setIsLoading(false);
    if (!apiRes) return;

    // localStorage.setItem("worUser", JSON.stringify(apiRes.user));
    // dispatch(setWorUser(apiRes.user));
    dispatch(fetchWorUsers());
    dispatch(drawerOpenCloseModalFunc(false));
  };

  useEffect(() => {
    console.log("serviceType", serviceType);

    return () => {
      setServiceType("");
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="w-full text-[14px] font-poppings font-semibold">
        Added Services
      </h2>
      <SelectTag
        width="100%"
        firstOptionText="SELECT SERVICES"
        onChange={handleSeletTag}
        options={servicesType}
      />
      <div className="w-full">
        {errors && (
          <p className="text-sm text-red-500 font-roboto w-full">{errors}</p>
        )}
        <Button
          bgColor="#e02e99"
          text="Add"
          textColor="#fff"
          isLoading={isLoading}
          onClick={handleSudmitTask}
        />
      </div>
    </div>
  );
};

export default AddVehicleServices;
