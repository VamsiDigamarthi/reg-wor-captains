import { useState } from "react";
import Input from "../../../SharedComponents/Input";
import Button from "../../../SharedComponents/Button";

const AadharUploadCard = () => {
  const [aadharNumber, setAadharNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<{
    front: string | null;
    back: string | null;
  }>({
    front: null,
    back: null,
  });

  const handleGetOtp = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API
    setOtpSent(true);
    setIsLoading(false);
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API
    setOtpVerified(true);
    setIsLoading(false);
  };

  const handleImageUpload = (type: "front" | "back") => {
    if (!otpVerified) return;
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImages((prev) => ({ ...prev, [type]: imageUrl }));
      }
    };
    fileInput.click();
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      {/* Aadhar Number Input */}
      <Input
        label="Aadhar Number"
        type="text"
        value={aadharNumber}
        onChange={(e) => setAadharNumber(e.target.value)}
        placeholder="Enter Aadhar Number"
        name="aadharNumber"
        disabled={otpSent} // Disable after OTP is sent
      />

      {/* OTP Input */}
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
      {!otpSent ? (
        <Button
          bgColor="#e02e88"
          isLoading={isLoading}
          text="GET OTP"
          textColor="#fff"
          onClick={handleGetOtp}
        />
      ) : !otpVerified ? (
        <Button
          bgColor="#e02e88"
          isLoading={isLoading}
          text="VERIFY OTP"
          textColor="#fff"
          onClick={handleVerifyOtp}
        />
      ) : (
        <>
          {/* Image Upload Section */}
          <div className="flex gap-4">
            <div
              className={`w-[100px] h-[100px] border-2 ${
                otpVerified
                  ? "border-blue-500 cursor-pointer"
                  : "border-gray-400 cursor-not-allowed"
              } flex items-center justify-center`}
              onClick={() => otpVerified && handleImageUpload("front")}
            >
              {images.front ? (
                <img
                  src={images.front}
                  alt="Front Aadhar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>Front</span>
              )}
            </div>

            <div
              className={`w-[100px] h-[100px] border-2 ${
                otpVerified
                  ? "border-blue-500 cursor-pointer"
                  : "border-gray-400 cursor-not-allowed"
              } flex items-center justify-center`}
              onClick={() => otpVerified && handleImageUpload("back")}
            >
              {images.back ? (
                <img
                  src={images.back}
                  alt="Back Aadhar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>Back</span>
              )}
            </div>
          </div>

          <Button
            bgColor="#4CAF50"
            isLoading={false}
            text="UPLOAD AADHAR IMAGE"
            textColor="#fff"
            onClick={() => alert("Aadhar Image Uploaded")}
          />
        </>
      )}
    </div>
  );
};

export default AadharUploadCard;
