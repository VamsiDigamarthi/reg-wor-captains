import { Check } from "lucide-react";

const UploadImageCard = () => {
  return (
    <div className="w-[250px] h-[120px] bg-white rounded-md border border-borderColor px-2 py-2 pb-3 flex flex-col justify-between">
      <div className="flex justify-between items-center w-full">
        <span className="text-sm text-gray-400 font-roboto">Aadhar Card</span>
        <Check size={18} color="gray" />
      </div>
      <div className="w-full h-[calc(100%-30px)] bg-gray-200 rounded-md"></div>
    </div>
  );
};

export default UploadImageCard;
