import token from "../Features/Auth/Slice/loginSlice";

import worUser from "../Features/DashBoard/Redux/reCaptainSlice";

import drawer from "../Features/DriverManagement/Slice/drawerSlice";

const RootReducer = {
  token,
  worUser,
  drawer,
};
export default RootReducer;
