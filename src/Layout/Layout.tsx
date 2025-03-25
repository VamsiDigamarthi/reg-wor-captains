import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="w-full h-full flex bg-red-200">
      <Sidebar />
      <div className="flex flex-col h-full w-[calc(100%-230px)]">
        <Header />
        <main className="w-full h-[calc(100%-70px)] bg-[#fcfcfc] border-x-1 overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
