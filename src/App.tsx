import { ToastContainer } from "react-toastify";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import PaymentManagementScreen from "./Features/ResWorCaptins/Screens/PaymentManagementScreen";
import NotificationScreen from "./Features/Notification/Screens/NotificationScreen";
import ReportScreen from "./Features/Report/Screens/ReportScreen";
import Dashboard from "./Features/DashBoard/Screens/Dashboard";
import DriverManagementScreen from "./Features/DriverManagement/Screens/DriverManagementScreen";
import LoginScreen from "./Features/Auth/Screens/LoginScreen";

function App() {
  return (
    <div className="flex flex-col w-full h-[100vh] overflow-hidden bg-red-300">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<LoginScreen />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/driver-management"
            element={<DriverManagementScreen />}
          />
          <Route
            path="/payment-management"
            element={<PaymentManagementScreen />}
          />
          <Route path="/notifications" element={<NotificationScreen />} />
          <Route path="/report" element={<ReportScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
