import { useSelector } from "react-redux";
import ModalLayout from "../../../Layout/ModalLayout";
import { RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import { imageUrl } from "../../../Core/url";

const DocsImagePreviewModa = () => {
  const { docsType } = useSelector((state: RootState) => state.modal);
  const { worUser } = useSelector((state: RootState) => state.worUser);

  const [images, setImages] = useState({
    frontImage: "",
    backImage: "",
    rightImage: "",
    leftImage: "",
    helmet: "",
    numberPlate: "",
  });

  useEffect(() => {
    if (docsType === "Aadhar Card") {
      setImages((pre) => ({
        ...pre,
        frontImage: worUser?.adhar ? `${imageUrl}/${worUser.adhar}` : "",
        backImage: worUser?.adharBack ? `${imageUrl}/${worUser.adharBack}` : "",
      }));
    } else if (docsType === "Dl Card") {
      setImages((pre) => ({
        ...pre,
        frontImage: worUser?.license ? `${imageUrl}/${worUser.license}` : "",
        backImage: worUser?.licenseBack
          ? `${imageUrl}/${worUser.licenseBack}`
          : "",
      }));
    } else if (docsType === "Rc Card") {
      setImages((pre) => ({
        ...pre,
        frontImage: worUser?.services?.[0]?.rcFrontImage
          ? `${imageUrl}/${worUser?.services?.[0]?.rcFrontImage}`
          : "",
        backImage: worUser?.services?.[0]?.rcBackImage
          ? `${imageUrl}/${worUser?.services?.[0]?.rcBackImage}`
          : "",
      }));
    } else if (docsType === "Vehicle Image") {
      setImages((pre) => ({
        ...pre,
        frontImage: worUser?.services?.[0]?.vehicleFrontImage
          ? `${imageUrl}/${worUser?.services?.[0]?.vehicleFrontImage}`
          : "",
        backImage: worUser?.services?.[0]?.vehicleBackImage
          ? `${imageUrl}/${worUser?.services?.[0]?.vehicleBackImage}`
          : "",
        rightImage: worUser?.services?.[0]?.vehicleRightImage
          ? `${imageUrl}/${worUser?.services?.[0]?.vehicleRightImage}`
          : "",

        leftImage: worUser?.services?.[0]?.vehicleLeftImage
          ? `${imageUrl}/${worUser?.services?.[0]?.vehicleLeftImage}`
          : "",

        helmet: worUser?.services?.[0]?.vehicleHelmetImage
          ? `${imageUrl}/${worUser?.services?.[0]?.vehicleHelmetImage}`
          : "",
        numberPlate: worUser?.services?.[0]?.vehicleNumberPlate
          ? `${imageUrl}/${worUser?.services?.[0]?.vehicleNumberPlate}`
          : "",
      }));
    } else if (docsType === "Insurance") {
      setImages((pre) => ({
        ...pre,
        frontImage: worUser?.services?.[0]?.insuranceImg
          ? `${imageUrl}/${worUser?.services?.[0]?.insuranceImg}`
          : "",
      }));
    } else if (docsType === "Certificate of fitness/PuC") {
      setImages((pre) => ({
        ...pre,
        frontImage: worUser?.services?.[0]?.fitnessCer
          ? `${imageUrl}/${worUser?.services?.[0]?.fitnessCer}`
          : "",
      }));
    }
  }, [docsType, worUser]);

  return (
    <ModalLayout title={`${docsType} Images`}>
      <div className="w-full flex flex-wrap gap-8 justify-between items-center h-full">
        <img
          className="w-[300px] h-[300px] object-contain"
          alt="docs-image"
          src={images?.frontImage}
        />
        <img
          className="w-[300px] h-[300px] object-contain"
          alt="docs-image"
          src={images?.backImage}
        />
      </div>
      {docsType === "Vehicle Image" && (
        <>
          <div className="w-full flex flex-wrap gap-8 justify-between items-center h-full">
            <img
              className="w-[300px] h-[300px] object-contain"
              alt="docs-image"
              src={images?.rightImage}
            />
            <img
              className="w-[300px] h-[300px] object-contain"
              alt="docs-image"
              src={images?.leftImage}
            />
          </div>
          <div className="w-full flex flex-wrap gap-8 justify-between items-center h-full">
            <img
              className="w-[300px] h-[300px] object-contain"
              alt="docs-image"
              src={images?.helmet}
            />
            <img
              className="w-[300px] h-[300px] object-contain"
              alt="docs-image"
              src={images?.numberPlate}
            />
          </div>
        </>
      )}
    </ModalLayout>
  );
};

export default DocsImagePreviewModa;
