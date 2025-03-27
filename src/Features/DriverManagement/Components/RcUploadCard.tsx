import { imageUrl } from "../../../Core/url";
import Button from "../../../SharedComponents/Button";
import Input from "../../../SharedComponents/Input";
import { useRcCardUploadHook } from "../Hooks/RcCardUpload.hook";

import aadharBackImage from "../../../assets/docsDumyImages/aadharBack.png";
import aadharFrontImage from "../../../assets/docsDumyImages/aadharFront.png";

const RcUploadCard = () => {
  const {
    setDocsNumber,
    docsNumber,
    isLoading,
    handleSubmitRcNumber,
    images,
    disableInput,
    worUser,
    handleImageUpload,
    handleUploadImages,
    disableImage,
  } = useRcCardUploadHook();

  let newFrontImage = worUser?.services?.[0]?.rcFrontImage
    ? `${imageUrl}/${worUser?.services?.[0]?.rcFrontImage}`
    : undefined;

  let newBackImage = worUser?.services?.[0]?.rcBackImage
    ? `${imageUrl}/${worUser?.services?.[0]?.rcBackImage}`
    : undefined;

  let colorType;
  switch (worUser?.services?.[0]?.rcVerificationStatuc) {
    case "pending":
      colorType = "Under-Verification";
      break;
    case "rejected":
      colorType = "Rejected";
      break;
    default:
      colorType = "black";
      break;
  }
  return (
    <div className="w-full flex flex-col gap-4 items-center border-b border-gray-500 pb-4">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-[14px] font-poppings font-semibold">
          RC Card Details
        </h3>
        <span
          className="text-base font-poppings font-semibold"
          style={{ color: colorType === "Rejected" ? "red" : "green" }}
        >
          {colorType !== "black" && colorType}
        </span>
      </div>
      <Input
        label={`RC Number`}
        type="text"
        value={docsNumber}
        onChange={(e) => setDocsNumber(e.target.value)}
        placeholder={`Enter RC Number`}
        name="aadharNumber"
        disabled={disableInput}
      />
      {!disableInput && (
        <Button
          bgColor="#e02e88"
          isLoading={isLoading}
          text="Submit"
          textColor="#fff"
          onClick={handleSubmitRcNumber}
        />
      )}

      <div className="w-full flex gap-4 justify-between items-center">
        <div
          className={`w-[200px] h-[200px] border-2 ${
            disableImage
              ? "border-blue-500 cursor-pointer"
              : "border-gray-400 cursor-not-allowed"
          } flex items-center justify-center`}
          onClick={() => disableImage && handleImageUpload("front")}
        >
          {images.front || newFrontImage ? (
            <img
              src={images.front || newFrontImage}
              alt="Front Aadhar"
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={aadharBackImage} className="w-full -end-full bg-black" />
          )}
        </div>

        <div
          className={`w-[200px] h-[200px] border-2 ${
            disableImage
              ? "border-blue-500 cursor-pointer"
              : "border-gray-400 cursor-not-allowed"
          } flex items-center justify-center`}
          onClick={() => disableImage && handleImageUpload("back")}
        >
          {images.back || newBackImage ? (
            <img
              src={images.back || newBackImage}
              alt="Back Aadhar"
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={aadharFrontImage} className="w-full -end-full bg-black" />
          )}
        </div>
      </div>
      {(!worUser?.services?.[0]?.rcBackImage ||
        worUser?.services?.[0]?.rcVerificationStatuc === "rejected") && (
        <Button
          bgColor="#4CAF50"
          isLoading={isLoading}
          text="UPLOAD AADHAR IMAGE"
          textColor="#fff"
          onClick={handleUploadImages}
        />
      )}
    </div>
  );
};

export default RcUploadCard;
