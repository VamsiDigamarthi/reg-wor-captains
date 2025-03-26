import { Clock, FileSpreadsheet, IndianRupee } from "lucide-react";

const DriverPaymnetIssueCard = () => {
  return (
    <div className="w-full flex flex-col gap-1 p-3 border-b border-gray-500">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[45px] h-[45px] bg-gray-300 rounded-full"></div>
          <div className="flex flex-col">
            <h2 className="text-[14px] font-roboto font-semibold">
              Driver Name
            </h2>
            <span className="-mt-1 text-[10px]">#IHN9888</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <FileSpreadsheet size={17} />
          <span className="text-sm font-roboto text-gray-700">TNX-89045</span>
        </div>
        <div className="flex items-center gap-1">
          <IndianRupee size={17} />
          <span className="text-sm font-roboto  text-gray-700">TNX-89045</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={17} />
          <span className="text-sm font-roboto  text-gray-700">TNX-89045</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <button className="py-1 bg-blue-100 rounded-md px-4">
          View Details
        </button>
        <button className="py-1 bg-red-200 rounded-md px-4">Escalate</button>
      </div>
    </div>
  );
};

export default DriverPaymnetIssueCard;
