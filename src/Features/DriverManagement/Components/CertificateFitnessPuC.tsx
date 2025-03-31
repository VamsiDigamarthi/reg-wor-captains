import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import { imageUrl } from "../../../Core/url";
import frontViewImage from "../../../assets/docsDumyImages/bikeFront.png";
import Button from "../../../SharedComponents/Button";
import { errorMsgApi } from "../../../Core/toast";
import { fetchWorUsers } from "../../DashBoard/Redux/reCaptainSlice";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";
import { certificationUpload } from "../Services/AadharCard.serv";

type docsImageType = {
  front: string | null;
  docFront: File | null;
};

const CertificateFitnessPuC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { worUser } = useSelector((state: RootState) => state.worUser);

  const [imageDisable, setImageDisable] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [images, setImages] = useState<docsImageType>({
    front: null,
    docFront: null,
  });

  let newFrontImage = worUser?.services?.[0]?.fitnessCer
    ? `${imageUrl}/${worUser.services?.[0]?.fitnessCer}`
    : undefined;

  const handleImageUpload = (type: "front") => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/jpeg, image/jpg, image/png, image/webp"; // Restrict file types

    fileInput.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];

      if (file) {
        const allowedTypes = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/webp",
        ];

        if (!allowedTypes.includes(file.type)) {
          alert(
            "Invalid file format. Please upload a JPEG, JPG, PNG, or WEBP file."
          );
          return;
        }

        const imageUrl = URL.createObjectURL(file);

        setImages((prev) => ({
          ...prev,
          [type]: imageUrl, // Update preview
          [type === "front" ? "docFront" : "docBack"]: file,
        }));
      }
    };

    fileInput.click();
  };

  const handleUploadImage = async () => {
    console.log("images", images);

    if (!images.docFront) {
      errorMsgApi("Select  Images");
      return;
    }

    setIsLoading(true);
    const success = await certificationUpload(
      worUser?.mobile ?? "",
      images,
      worUser?.services?.[0]?.serviceType ?? ""
    );
    setIsLoading(false);
    if (success) {
      dispatch(fetchWorUsers());
      dispatch(drawerOpenCloseModalFunc(false));
    }
  };

  const handleSetApiDocsNumber = () => {
    if (worUser?.services?.[0]?.fitnessCer) {
      setImageDisable(false);
    }
  };

  useEffect(() => {
    if (worUser) {
      handleSetApiDocsNumber();
    }
  }, [worUser]);

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-lg font-poppings font-semibold">
          Certificate of fitness/PuC (optional)
        </h3>
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
      </div>
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

export default CertificateFitnessPuC;
