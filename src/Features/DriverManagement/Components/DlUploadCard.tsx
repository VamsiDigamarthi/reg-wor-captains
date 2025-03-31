import Input from "../../../SharedComponents/Input";
import { useDlUploadCardHook } from "../Hooks/DlUploadCard.hook";
import aadharBackImage from "../../../assets/docsDumyImages/aadharBack.png";
import aadharFrontImage from "../../../assets/docsDumyImages/aadharFront.png";
import { imageUrl } from "../../../Core/url";
import Button from "../../../SharedComponents/Button";

const DlUploadCard = () => {
  const {
    worUser,
    docsNumber,
    setDocsNumber,
    setDob,
    dob,
    images,
    isLoading,
    // disable states
    dlNumberDisable,
    imageDisable,
    // handlers
    handleSubmitDlNumber,
    handleImageUpload,
    handleUploadImage,
  } = useDlUploadCardHook();

  let newFrontImage = worUser?.license
    ? `${imageUrl}/${worUser.license}`
    : undefined;

  let newBackImage = worUser?.licenseBack
    ? `${imageUrl}/${worUser.licenseBack}`
    : undefined;

  let colorType;
  switch (worUser?.adminDocsVerified?.adminLicenVerified) {
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

  console.log("dlNumberDisable", dlNumberDisable);

  return (
    <div className="w-full flex flex-col gap-4 items-center border-b border-gray-500 pb-5">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-lg font-poppings font-semibold">Dl Card Details</h3>
        <span
          className="text-base font-poppings font-semibold"
          style={{ color: colorType === "Rejected" ? "red" : "green" }}
        >
          {colorType !== "black" && colorType}
        </span>
      </div>
      <Input
        label={`DL Number`}
        type="text"
        value={docsNumber}
        onChange={(e) => setDocsNumber(e.target.value)}
        placeholder={`Enter DL Number`}
        name="aadharNumber"
        disabled={dlNumberDisable}
      />
      {!dlNumberDisable && (
        <>
          <Input
            label={`DOB`}
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder={`1999-09-09`}
            name="aadharNumber"
            disabled={false}
          />
          <Button
            bgColor="#e02e88"
            isLoading={isLoading}
            text="Submit"
            textColor="#fff"
            onClick={handleSubmitDlNumber}
          />
        </>
      )}
      <div className="w-full flex gap-4 justify-between items-center">
        <div
          className={`w-[200px] h-[200px] border-2 ${
            imageDisable
              ? "border-blue-500 cursor-pointer"
              : "border-gray-400 cursor-not-allowed"
          } flex items-center justify-center`}
          onClick={() => imageDisable && handleImageUpload("front")}
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
            imageDisable
              ? "border-blue-500 cursor-pointer"
              : "border-gray-400 cursor-not-allowed"
          } flex items-center justify-center`}
          onClick={() => imageDisable && handleImageUpload("back")}
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
      {(!worUser?.license ||
        worUser?.adminDocsVerified?.adminLicenVerified === "rejected") && (
        <Button
          bgColor="#4CAF50"
          isLoading={isLoading}
          text="UPLOAD DL IMAGE"
          textColor="#fff"
          onClick={handleUploadImage}
        />
      )}
    </div>
  );
};

export default DlUploadCard;
