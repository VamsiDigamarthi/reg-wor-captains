import SidebarItem from "../SharedComponents/SidebarItem";
import {
  Bolt,
  LogOut,
  NotepadText,
  Settings,
  SlidersHorizontal,
  SquareDashed,
} from "lucide-react";
import SideBarProfileCard from "../SharedComponents/SideBarProfileCard";
const Sidebar = () => {
  return (
    <aside className="w-[230px] h-full bg-white flex flex-col items-center relative border-r border-gray-300">
      <SideBarProfileCard />
      <div className="w-full p-4 flex flex-col gap-6">
        <SidebarItem Icon={SquareDashed} text="Dashboard" navLink="/" />
        <SidebarItem
          Icon={Settings}
          text="Ride Management"
          navLink="driver-management"
        />
        <SidebarItem
          Icon={NotepadText}
          text="Payment Management"
          navLink="payment-management"
        />

        <SidebarItem Icon={SlidersHorizontal} text="Reports" navLink="report" />
        <SidebarItem Icon={Bolt} text="Setting" navLink="/" />
      </div>
      <div className="absolute left-0 right-0 bottom-4 p-4">
        <SidebarItem
          Icon={LogOut}
          text="Logout"
          textColor="text-red-600"
          navLink="/"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
