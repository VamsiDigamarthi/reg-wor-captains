import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import { imageUrl } from "../../../Core/url";
import { errorMsgApi } from "../../../Core/toast";
import { fetchWorUsers } from "../../DashBoard/Redux/reCaptainSlice";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";
import { uploadVehicleImage } from "../Services/AadharCard.serv";

type docsImageType = {
  front: string | null;
  back: string | null;

  left: string | null;
  right: string | null;
  numberPlate: string | null;
  helmet: string | null;

  docsFront: File | null;
  docsBack: File | null;
  docsLeft: File | null;
  docsRight: File | null;
  docsNumberPlate: File | null;
  docsHelmet: File | null;
};

export const useVehicleImageHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUser } = useSelector((state: RootState) => state.worUser);

  const [imageDisable, setImageDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [images, setImages] = useState<docsImageType>({
    front: null,
    back: null,
    left: null,
    right: null,
    numberPlate: null,
    helmet: null,

    docsFront: null,
    docsBack: null,
    docsLeft: null,
    docsRight: null,
    docsNumberPlate: null,
    docsHelmet: null,
  });

  let newFrontImage = worUser?.services?.[0]?.vehicleFrontImage
    ? `${imageUrl}/${worUser.services?.[0]?.vehicleFrontImage}`
    : undefined;

  let newBackImage = worUser?.services?.[0]?.vehicleBackImage
    ? `${imageUrl}/${worUser.services?.[0]?.vehicleBackImage}`
    : undefined;

  let newLeftImage = worUser?.services?.[0]?.vehicleLeftImage
    ? `${imageUrl}/${worUser.services?.[0]?.vehicleLeftImage}`
    : undefined;
  let newRightImage = worUser?.services?.[0]?.vehicleRightImage
    ? `${imageUrl}/${worUser.services?.[0]?.vehicleRightImage}`
    : undefined;

  let newHelmetImage = worUser?.services?.[0]?.vehicleHelmetImage
    ? `${imageUrl}/${worUser.services?.[0]?.vehicleHelmetImage}`
    : undefined;
  let newNumberImage = worUser?.services?.[0]?.vehicleNumberPlate
    ? `${imageUrl}/${worUser.services?.[0]?.vehicleNumberPlate}`
    : undefined;

  let colorType;
  switch (worUser?.services?.[0]?.vehicleImageVerification) {
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

  const handleImageUpload = (
    type: "front" | "back" | "left" | "right" | "helmet" | "numberPlate"
  ) => {
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
          [`docs${type.charAt(0).toUpperCase() + type.slice(1)}`]: file, // Store file for upload
        }));
      }
    };

    fileInput.click();
  };

  const handleUploadImage = async () => {
    console.log("images", images);

    if (
      worUser?.services?.[0]?.serviceType === "scooty" ||
      worUser?.services?.[0]?.serviceType === "parcel"
    ) {
      if (
        !images.docsFront ||
        !images.docsBack ||
        !images.docsRight ||
        !images.docsLeft ||
        !images.docsNumberPlate ||
        !images.docsHelmet
      ) {
        errorMsgApi("Select All Vehicle Images");
        return;
      }
    } else {
      if (
        !images.docsFront ||
        !images.docsBack ||
        !images.docsRight ||
        !images.docsLeft
      ) {
        errorMsgApi("Select Front, Back, Left, and Right Images");
        return;
      }
    }

    setIsLoading(true);
    const success = await uploadVehicleImage(
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
    if (worUser?.services?.[0]?.vehicleImageVerification === "rejected") {
      setImageDisable(true);
    } else if (worUser?.services?.[0]?.vehicleImageVerification === "pending") {
      setImageDisable(false);
    }
  };

  useEffect(() => {
    if (worUser) {
      handleSetApiDocsNumber();
    }
  }, [worUser]);

  return {
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
  };
};
