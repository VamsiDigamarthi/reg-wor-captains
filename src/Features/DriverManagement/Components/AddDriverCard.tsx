import { useAddDriverCardHook } from "../Hooks/AddDriverCard.hook";
import AddVehicleServices from "./AddVehicleServices";
import { DocsUploadDetails } from "./DocsUploadDetails";
import DriverSignUpForm from "./DriverSignUpForm";
import ExistingRegCaptainNameCard from "./ExistingRegCaptainNameCard";

const AddDriverCard = () => {
  const { isActionBtn, worUser } = useAddDriverCardHook();

  return (
    <div className="w-full flex flex-col gap-4">
      {isActionBtn ? <ExistingRegCaptainNameCard /> : <DriverSignUpForm />}
      {worUser?.services?.[0]?.serviceType && isActionBtn ? (
        <DocsUploadDetails />
      ) : (
        <>{isActionBtn && <AddVehicleServices />}</>
      )}
    </div>
  );
};

export default AddDriverCard;
