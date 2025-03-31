import { CircleOff, Clock7 } from "lucide-react";
import { type FC } from "react";

type UploadImageCardType = {
  name: string;
  imageUlr: string;
  isVerified?: string;
};

const UploadImageCard: FC<UploadImageCardType> = ({
  name,
  imageUlr,
  isVerified,
}) => {
  return (
    <div className="w-[250px] h-[120px] bg-white rounded-md border border-borderColor px-2 py-2 pb-3 flex flex-col justify-between cursor-pointer">
      <div className="flex justify-between items-center w-full">
        <span className="text-sm text-gray-400 font-roboto">{name}</span>
        {isVerified === "pending" && <Clock7 size={18} color="gray" />}
        {isVerified === "rejected" && <CircleOff size={18} color="gray" />}
      </div>
      <div className="w-full h-[calc(100%-30px)] bg-gray-200 rounded-md">
        <img
          src={imageUlr}
          className="w-full h-full object-contain"
          alt="card image"
        />
      </div>
    </div>
  );
};

export default UploadImageCard;
