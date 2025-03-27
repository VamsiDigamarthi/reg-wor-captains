import Input from "../../../SharedComponents/Input";
import Button from "../../../SharedComponents/Button";
import { useAadharCardUploadHook } from "../Hooks/AadharCardUpload.hook";
import SelectTag from "../../../SharedComponents/SelectTag";
import aadharBackImage from "../../../assets/docsDumyImages/aadharBack.png";
import aadharFrontImage from "../../../assets/docsDumyImages/aadharFront.png";
import panFrontIage from "../../../assets/docsDumyImages/newPanFront.png";
import panBackImage from "../../../assets/docsDumyImages/panBack.png";
import { imageUrl } from "../../../Core/url";

const docsName = ["Aadhar", "Pan"];

const AadharUploadCard = () => {
  const {
    worUser,
    aadharNumber,
    setAadharNumber,
    otp,
    setOtp,
    otpSent,
    isLoading,
    images,
    otpVerified,
    handleGetOtp,
    handleVerifyOtp,
    handleImageUpload,
    // docs type
    changeDocsType,
    docsType,
    handleUploadImages,
    imageLoader,
    // disable state
    aadharNumberDisable,
    imageEnable,
  } = useAadharCardUploadHook();

  let frontImage = docsType === "Aadhar" ? aadharFrontImage : panFrontIage;
  let backImage = docsType === "Aadhar" ? aadharBackImage : panBackImage;

  let newFrontImage = worUser?.adhar
    ? `${imageUrl}/${worUser.adhar}`
    : undefined;

  let newBackImage = worUser?.adharBack
    ? `${imageUrl}/${worUser.adharBack}`
    : undefined;

  let colorType;
  switch (worUser?.adminDocsVerified?.adminAadharVerified) {
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

  console.log("otpVerified", otpVerified);
  console.log("aadharNumberDisable", aadharNumberDisable);
  console.log("imageEnable", imageEnable);

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-[14px] font-poppings font-semibold">
          Aadhar Card Details
        </h3>
        <span
          className="text-base font-poppings font-semibold"
          style={{ color: colorType === "Rejected" ? "red" : "green" }}
        >
          {colorType !== "black" && colorType}
        </span>
      </div>
      {!otpVerified && !worUser?.docsNumber?.newAadharNumber && (
        <div className="w-full">
          <SelectTag
            firstOptionText="SELECT Aadhar/Pan"
            onChange={changeDocsType}
            options={docsName}
            width="100%"
          />
        </div>
      )}
      {(docsType || worUser?.docsNumber?.newAadharNumber) && (
        <>
          <Input
            label={`${docsType} Number`}
            type="text"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            placeholder={`Enter ${docsType} Number`}
            name="aadharNumber"
            disabled={otpVerified || aadharNumberDisable}
          />

          {otpSent && !otpVerified && (
            <Input
              label="Aadhar OTP"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              name="otp"
            />
          )}

          {/* OTP Buttons */}
          {!aadharNumberDisable && (
            <>
              {!otpSent ? (
                <Button
                  bgColor="#e02e88"
                  isLoading={isLoading}
                  text="GET OTP"
                  textColor="#fff"
                  onClick={handleGetOtp}
                />
              ) : (
                <Button
                  bgColor="#e02e88"
                  isLoading={isLoading}
                  text="VERIFY OTP"
                  textColor="#fff"
                  onClick={handleVerifyOtp}
                />
              )}
            </>
          )}

          <>
            {/* Image Upload Section */}
            <div className="w-full flex gap-4 justify-between items-center">
              <div
                className={`w-[200px] h-[200px] border-2 ${
                  otpVerified || imageEnable
                    ? "border-blue-500 cursor-pointer"
                    : "border-gray-400 cursor-not-allowed"
                } flex items-center justify-center`}
                onClick={() =>
                  (otpVerified || imageEnable) && handleImageUpload("front")
                }
              >
                {images.front || newFrontImage ? (
                  <img
                    src={images.front || newFrontImage}
                    alt="Front Aadhar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img src={frontImage} className="w-full -end-full bg-black" />
                )}
              </div>

              <div
                className={`w-[200px] h-[200px] border-2 ${
                  otpVerified || imageEnable
                    ? "border-blue-500 cursor-pointer"
                    : "border-gray-400 cursor-not-allowed"
                } flex items-center justify-center`}
                onClick={() =>
                  (otpVerified || imageEnable) && handleImageUpload("back")
                }
              >
                {images.back || newBackImage ? (
                  <img
                    src={images.back || newBackImage}
                    alt="Back Aadhar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img src={backImage} className="w-full -end-full bg-black" />
                )}
              </div>
            </div>
            {(!worUser?.adhar ||
              worUser?.adminDocsVerified?.adminAadharVerified ===
                "rejected") && (
              <Button
                bgColor="#4CAF50"
                isLoading={imageLoader}
                text="UPLOAD AADHAR IMAGE"
                textColor="#fff"
                onClick={handleUploadImages}
              />
            )}
          </>
        </>
      )}
    </div>
  );
};

export default AadharUploadCard;
