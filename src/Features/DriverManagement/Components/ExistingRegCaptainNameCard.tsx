import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

const ExistingRegCaptainNameCard = () => {
  const { worUser } = useSelector((state: RootState) => state.worUser);

  return (
    <div className="w-full flex justify-between items-center border-b border-gray-300">
      <span className="font-roboto">
        Name:
        <span className="text-lg font-poppings font-semibold">
          {worUser?.name}
        </span>
      </span>
      <span className="font-roboto">
        Mobile:{" "}
        <span className="text-base font-poppings font-semibold">
          {worUser?.mobile}
        </span>
      </span>
    </div>
  );
};

export default ExistingRegCaptainNameCard;
