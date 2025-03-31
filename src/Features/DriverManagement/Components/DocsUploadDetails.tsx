import { useSelector } from "react-redux";
import AadharUploadCard from "./AadharUploadCard";
import DlUploadCard from "./DlUploadCard";
import RcUploadCard from "./RcUploadCard";
import { RootState } from "../../../Redux/store";
import VehicleImage from "./VehicleImage";
import CertificateFitnessPuC from "./CertificateFitnessPuC";
import VehicleInsurance from "./VehicleInsurance";

export const DocsUploadDetails = () => {
  const { worUser } = useSelector((state: RootState) => state.worUser);

  return (
    <div className="w-full flex flex-col gap-10">
      <AadharUploadCard />
      <RcUploadCard />
      <DlUploadCard />
      <VehicleImage />
      {(worUser?.services?.[0]?.serviceType === "car" ||
        worUser?.services?.[0]?.serviceType === "wor-premium") && (
        <>
          <VehicleInsurance />
          <CertificateFitnessPuC />
        </>
      )}
    </div>
  );
};
