import IconButton from "../../../SharedComponents/IconButton";
import { Pencil } from "lucide-react";

const EditProfileFirstCard = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-roboto font-semibold text-[#e02e88]">
          Driver Profile
        </h2>
        <span className="text-base text-gray-500">Drivers Profile</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-[120px] h-[45px] bg-green-100 rounded-lg flex justify-center items-center text-sm font-roboto">
          Active
        </span>
        <IconButton Icon={Pencil} bgColor="#e02d88" text="Edit Profile" />
      </div>
    </div>
  );
};

export default EditProfileFirstCard;
