import { useAddDriverCardHook } from "../Hooks/AddDriverCard.hook";
import { DocsUploadDetails } from "./DocsUploadDetails";
import DriverSignUpForm from "./DriverSignUpForm";
import ExistingRegCaptainNameCard from "./ExistingRegCaptainNameCard";

const AddDriverCard = () => {
  const { isActionBtn } = useAddDriverCardHook();

  return (
    <div className="w-full flex flex-col gap-4">
      {isActionBtn ? <ExistingRegCaptainNameCard /> : <DriverSignUpForm />}
      <DocsUploadDetails />
    </div>
  );
};

export default AddDriverCard;
