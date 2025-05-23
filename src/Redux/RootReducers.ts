import token from "../Features/Auth/Slice/loginSlice";
import modal from "./modalFeatureSlice";

import worUser from "../Features/DashBoard/Redux/reCaptainSlice";
import drawer from "../Features/DriverManagement/Slice/drawerSlice";
import isDisplayDriverListorItem from "../Features/DriverManagement/Slice/isDisplayDriverListOrDriverDetails.slice";

const RootReducer = {
  token,
  worUser,
  drawer,
  isDisplayDriverListorItem,
  modal,
};
export default RootReducer;
