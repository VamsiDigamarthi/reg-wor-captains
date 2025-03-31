import { useDispatch, useSelector } from "react-redux";
import UploadImageCard from "../../ResWorCaptins/Components/UploadImageCard";
import { AppDispatch, RootState } from "../../../Redux/store";
import { imageUrl } from "../../../Core/url";
import { useEffect, useState } from "react";
import DocsImagePreviewModa from "../Modals/DocsImagePreviewModa";
import {
  openModal,
  openSpecificDocsModalType,
} from "../../../Redux/modalFeatureSlice";

const UploadImageDocs = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUser } = useSelector((state: RootState) => state.worUser);
  const { activeModal } = useSelector((state: RootState) => state.modal);

  const [docsVerified, setDocsVerified] = useState({
    aadhar: "initiall",
    dl: "initiall",
    rc: "initiall",
    vehicleImage: "initiall",
    insurance: "initiall",
    fitCertificate: "initiall",
  });

  const aadharImage = worUser?.adhar
    ? `${imageUrl}/${worUser.adhar}`
    : undefined;

  const dlImage = worUser?.license
    ? `${imageUrl}/${worUser.license}`
    : undefined;

  const rcImage = worUser?.services?.[0]?.rcFrontImage
    ? `${imageUrl}/${worUser?.services?.[0]?.rcFrontImage}`
    : undefined;

  const vehicleImage = worUser?.services?.[0]?.vehicleFrontImage
    ? `${imageUrl}/${worUser.services?.[0]?.vehicleFrontImage}`
    : undefined;

  const insuranceImage = worUser?.services?.[0]?.insuranceImg
    ? `${imageUrl}/${worUser.services?.[0]?.insuranceImg}`
    : undefined;

  let fitCer = worUser?.services?.[0]?.fitnessCer
    ? `${imageUrl}/${worUser.services?.[0]?.fitnessCer}`
    : undefined;

  useEffect(() => {
    // aadhar card
    if (
      worUser?.docsNumber?.newAadharNumber &&
      worUser?.adminDocsVerified?.adminAadharVerified === "rejected"
    ) {
      setDocsVerified((prev) => ({
        ...prev,
        aadhar: worUser?.adminDocsVerified?.adminAadharVerified,
      }));
    } else if (
      worUser?.docsNumber?.newAadharNumber &&
      worUser?.adminDocsVerified?.adminAadharVerified === "pending"
    ) {
      setDocsVerified((prev) => ({
        ...prev,
        aadhar: worUser?.adminDocsVerified?.adminAadharVerified,
      }));
    }
    // rc card
    if (
      worUser?.services?.[0]?.rcNumber &&
      worUser?.services?.[0]?.rcVerificationStatuc === "rejected"
    ) {
      setDocsVerified((prev) => ({
        ...prev,
        rc: worUser?.services?.[0]?.rcVerificationStatuc ?? "initiall",
      }));
    } else if (
      worUser?.services?.[0]?.rcNumber &&
      worUser?.services?.[0]?.rcVerificationStatuc === "pending"
    ) {
      setDocsVerified((prev) => ({
        ...prev,
        rc: worUser?.services?.[0]?.rcVerificationStatuc ?? "initiall",
      }));
    }
    // dl card
    if (
      worUser?.docsNumber?.newLicenNumber &&
      worUser?.adminDocsVerified?.adminLicenVerified === "rejected"
    ) {
      setDocsVerified((prev) => ({
        ...prev,
        dl: worUser?.adminDocsVerified?.adminLicenVerified,
      }));
    } else if (
      worUser?.docsNumber?.newLicenNumber &&
      worUser?.adminDocsVerified?.adminLicenVerified === "pending"
    ) {
      setDocsVerified((prev) => ({
        ...prev,
        dl: worUser?.adminDocsVerified?.adminLicenVerified,
      }));
    }

    // vehicle image
    if (worUser?.services?.[0]?.vehicleImageVerification === "rejected") {
      setDocsVerified((prev) => ({
        ...prev,
        vehicleImage:
          worUser?.services?.[0]?.vehicleImageVerification ?? "initiall",
      }));
    } else if (worUser?.services?.[0]?.vehicleImageVerification === "pending") {
      setDocsVerified((prev) => ({
        ...prev,
        vehicleImage:
          worUser?.services?.[0]?.vehicleImageVerification ?? "initiall",
      }));
    }

    // Insurance

    if (worUser?.services?.[0]?.insuranceVerification === "rejected") {
      setDocsVerified((prev) => ({
        ...prev,
        insurance: worUser?.services?.[0]?.insuranceVerification ?? "initiall",
      }));
    } else if (worUser?.services?.[0]?.insuranceVerification === "pending") {
      setDocsVerified((prev) => ({
        ...prev,
        insurance: worUser?.services?.[0]?.insuranceVerification ?? "initiall",
      }));
    }
  }, [worUser]);

  const handleOpenDocsDetailsModal = (type: string) => {
    dispatch(openModal("Docs Image"));
    dispatch(openSpecificDocsModalType(type));
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <UploadImageCard
          name="Aadhar Card"
          imageUlr={aadharImage ?? ""}
          isVerified={docsVerified?.aadhar}
          onClick={() => handleOpenDocsDetailsModal("Aadhar Card")}
        />
        <UploadImageCard
          imageUlr={dlImage ?? ""}
          name="Dl Card"
          isVerified={docsVerified?.dl}
          onClick={() => handleOpenDocsDetailsModal("Dl Card")}
        />
        <UploadImageCard
          imageUlr={rcImage ?? ""}
          name="Rc Card"
          isVerified={docsVerified?.rc}
          onClick={() => handleOpenDocsDetailsModal("Rc Card")}
        />
        <UploadImageCard
          imageUlr={vehicleImage ?? ""}
          name="Vehicle Image"
          isVerified={docsVerified?.vehicleImage}
          onClick={() => handleOpenDocsDetailsModal("Vehicle Image")}
        />

        {/* {(worUser?.services?.[0]?.serviceType === "car" ||
          worUser?.services?.[0]?.serviceType === "wor-premium") && (
          <> */}
        <UploadImageCard
          imageUlr={insuranceImage ?? ""}
          name="Insurance"
          isVerified={docsVerified?.insurance}
          onClick={() => handleOpenDocsDetailsModal("Insurance")}
        />
        <UploadImageCard
          imageUlr={fitCer ?? ""}
          name="Certificate of fitness/PuC"
          isVerified={docsVerified?.fitCertificate}
          onClick={() =>
            handleOpenDocsDetailsModal("Certificate of fitness/PuC")
          }
        />
        {/* </>
        )} */}
      </div>
      {activeModal === "Docs Image" && <DocsImagePreviewModa />}
    </>
  );
};

export default UploadImageDocs;
