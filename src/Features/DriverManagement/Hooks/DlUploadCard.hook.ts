import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import { docsImageType } from "./AadharCardUpload.hook";
import { errorMsgApi } from "../../../Core/toast";
import { handleUploadLicOwnServer } from "../Services/dlCard.serv";
import { fetchWorUsers } from "../../DashBoard/Redux/reCaptainSlice";
import { uploadDlImages } from "../Services/AadharCard.serv";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";

export const useDlUploadCardHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUser } = useSelector((state: RootState) => state.worUser);

  const [docsNumber, setDocsNumber] = useState("");
  const [dob, setDob] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [images, setImages] = useState<docsImageType>({
    front: null,
    back: null,
    docFront: null,
    docBack: null,
  });

  //   disable states
  const [dlNumberDisable, setDlNumberDisable] = useState(false);
  const [imageDisable, setImageDisable] = useState(false);

  const handleSubmitDlNumber = async () => {
    if (!docsNumber || !dob) {
      errorMsgApi("Please Provide all details");
      return;
    }
    setIsLoading(true);
    const data = await handleUploadLicOwnServer({
      mobile: worUser?.mobile ?? "",
      dob,
      docsNumber,
    });
    setIsLoading(false);
    if (data) {
      setDlNumberDisable(true);
      setImageDisable(true);
      dispatch(fetchWorUsers());
    }
  };

  const handleImageUpload = (type: "front" | "back") => {
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
          [type === "front" ? "docFront" : "docBack"]: file, // Store file for upload
        }));
      }
    };

    fileInput.click();
  };

  const handleUploadImage = async () => {
    if (!images.docFront || !images.docBack) {
      errorMsgApi("Select DL Front and Back Images");
    }
    setIsLoading(true);
    const success = await uploadDlImages(worUser?.mobile ?? "", images);
    setIsLoading(false);
    if (success) {
      dispatch(fetchWorUsers());
      dispatch(drawerOpenCloseModalFunc(false));
    }
  };

  const handleSetApiDocsNumber = () => {
    let value;
    if (
      worUser?.docsNumber?.newLicenNumber &&
      worUser?.adminDocsVerified?.adminLicenVerified === "rejected"
    ) {
      value = worUser?.docsNumber?.newLicenNumber;
      setDlNumberDisable(false);
      setImageDisable(true);
      setDob(worUser?.docsNumber?.dob ?? "");
    } else if (worUser?.docsNumber?.newLicenNumber) {
      value = worUser?.docsNumber?.newLicenNumber;

      setDlNumberDisable(true);
    } else if (
      worUser?.adminDocsVerified?.adminLicenVerified !== "rejected" &&
      worUser?.licenseBack
    ) {
      setImageDisable(false);
    } else {
      value = docsNumber;
    }

    setDocsNumber(value ?? "");
  };

  useEffect(() => {
    if (worUser) {
      handleSetApiDocsNumber();
    }
  }, [worUser]);

  return {
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
  };
};
