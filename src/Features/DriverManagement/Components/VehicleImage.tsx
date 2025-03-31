import { useVehicleImageHook } from "../Hooks/VehicleImage";

import frontViewImage from "../../../assets/docsDumyImages/bikeFront.png";
import backViewImage from "../../../assets/docsDumyImages/bikeBack.png";
import leftViewImage from "../../../assets/docsDumyImages/bikeLeft.png";
import rightViewImage from "../../../assets/docsDumyImages/bikeRight.png";
import helmet from "../../../assets/docsDumyImages/helmet.png";
import numberPlate from "../../../assets/docsDumyImages/bikeBack.png";
import Button from "../../../SharedComponents/Button";
const VehicleImage = () => {
  const {
    worUser,
    colorType,
    imageDisable,
    images,
    handleImageUpload,
    newFrontImage,
    newBackImage,
    newLeftImage,
    newRightImage,
    newHelmetImage,
    newNumberImage,
    handleUploadImage,
    isLoading,
  } = useVehicleImageHook();

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-lg font-poppings font-semibold">Vehicle Images</h3>
        <span
          className="text-base font-poppings font-semibold"
          style={{ color: colorType === "Rejected" ? "red" : "green" }}
        >
          {colorType !== "black" && colorType}
        </span>
      </div>
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
              className="w-full h-full object-contain"
            />
          ) : (
            <img src={frontViewImage} className="w-[80%] -end-full bg-black" />
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
              alt="Front Aadhar"
              className="w-full h-full object-contain"
            />
          ) : (
            <img src={backViewImage} className="w-[80%]  -end-full bg-black" />
          )}
        </div>
      </div>
      {/* right and left */}
      <div className="w-full flex gap-4 justify-between items-center">
        <div
          className={`w-[200px] h-[200px] border-2 ${
            imageDisable
              ? "border-blue-500 cursor-pointer"
              : "border-gray-400 cursor-not-allowed"
          } flex items-center justify-center`}
          onClick={() => imageDisable && handleImageUpload("left")}
        >
          {images.left || newLeftImage ? (
            <img
              src={images.left || newLeftImage}
              alt="Front Aadhar"
              className="w-full h-full object-contain"
            />
          ) : (
            <img src={leftViewImage} className="w-[80%]  -end-full bg-black" />
          )}
        </div>
        <div
          className={`w-[200px] h-[200px] border-2 ${
            imageDisable
              ? "border-blue-500 cursor-pointer"
              : "border-gray-400 cursor-not-allowed"
          } flex items-center justify-center`}
          onClick={() => imageDisable && handleImageUpload("right")}
        >
          {images.right || newRightImage ? (
            <img
              src={images.right || newRightImage}
              alt="Front Aadhar"
              className="w-full h-full object-contain"
            />
          ) : (
            <img src={rightViewImage} className="w-[80%]  -end-full bg-black" />
          )}
        </div>
      </div>
      {/* helmet and number plate */}

      {(worUser?.services?.[0]?.serviceType === "scooty" ||
        worUser?.services?.[0]?.serviceType === "parcel") && (
        <div className="w-full flex gap-4 justify-between items-center">
          <div
            className={`w-[200px] h-[200px] border-2 ${
              imageDisable
                ? "border-blue-500 cursor-pointer"
                : "border-gray-400 cursor-not-allowed"
            } flex items-center justify-center`}
            onClick={() => imageDisable && handleImageUpload("helmet")}
          >
            {images.helmet || newHelmetImage ? (
              <img
                src={images.helmet || newHelmetImage}
                alt="Front Aadhar"
                className="w-full h-full object-contain"
              />
            ) : (
              <img src={helmet} className="w-[80%]  -end-full bg-black" />
            )}
          </div>
          <div
            className={`w-[200px] h-[200px] border-2 ${
              imageDisable
                ? "border-blue-500 cursor-pointer"
                : "border-gray-400 cursor-not-allowed"
            } flex items-center justify-center`}
            onClick={() => imageDisable && handleImageUpload("numberPlate")}
          >
            {images.numberPlate || newNumberImage ? (
              <img
                src={images.numberPlate || newNumberImage}
                alt="Front Aadhar"
                className="w-[full] h-full object-contain"
              />
            ) : (
              <img src={numberPlate} className="w-[80%]  -end-full bg-black" />
            )}
          </div>
        </div>
      )}
      {imageDisable && (
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

export default VehicleImage;
