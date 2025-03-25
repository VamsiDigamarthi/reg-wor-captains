import { ToastContainer } from "react-toastify";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Features/ResWorCaptins/Screens/Dashboard";
import DriverManagementScreen from "./Features/ResWorCaptins/Screens/DriverManagementScreen";
import PaymentManagementScreen from "./Features/ResWorCaptins/Screens/PaymentManagementScreen";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
