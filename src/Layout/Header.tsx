import { BellDot, Phone, Search } from "lucide-react";
import BorderIcon from "../SharedComponents/BorderIcon";
import IconButton from "../SharedComponents/IconButton";

const Header = () => {
  return (
    <header className="w-full h-[70px] bg-white flex justify-between items-center px-6 border-b border-gray-300">
      <div className="">
        <h2 className="text-lg font-semibold font-roboto">Welcome MR Chintu</h2>
        <p className="text-[14px] font-normal font-roboto">
          Sunday <span className="text-[13px] text-gray-500">18, Jun 2025</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <BorderIcon Icon={Search} />
        <BorderIcon Icon={BellDot} />
        <IconButton Icon={Phone} bgColor="#f45050" text="Support" />
      </div>
    </header>
  );
};

export default Header;
