import { useEffect, useState } from "react";
import {
  aadharCardOtpVerification,
  aadharNumberSendOtp,
  handleUploadPanNumberOwnServer,
  uploadAadharImages,
} from "../Services/AadharCard.serv";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { fetchWorUsers } from "../../DashBoard/Redux/reCaptainSlice";
import { errorMsgApi } from "../../../Core/toast";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";
export type docsImageType = {
  front: string | null;
  back: string | null;
  docFront: File | null;
  docBack: File | null;
};

export const useAadharCardUploadHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUser } = useSelector((state: RootState) => state.worUser);

  const [docsType, setDocsType] = useState("");

  const [aadharNumber, setAadharNumber] = useState("");

  const [aadharNumberDisable, setAadharNumberDisable] =
    useState<boolean>(false);

  const [clientId, setClientId] = useState("");

  const [imageEnable, setImageEnable] = useState<boolean>(false);

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<docsImageType>({
    front: null,
    back: null,
    docFront: null,
    docBack: null,
  });

  const [imageLoader, setImageLoader] = useState(false);

  const handleGetOtp = async () => {
    if (docsType === "Aadhar" && aadharNumber.length === 12) {
      aadharGetOtp();
    } else if (docsType === "Pan" && aadharNumber.length === 10) {
      panNumberSubmit();
    } else {
      errorMsgApi("Enter Valid Aadhar / Pan Number");
    }
  };

  const aadharGetOtp = async () => {
    setIsLoading(true);

    const aadhaApi = await aadharNumberSendOtp({ aadharNumber: aadharNumber });
    setIsLoading(false);
    if (!aadhaApi.status) return;
    setOtpSent(true);
    setClientId(aadhaApi.clientId);
  };

  const panNumberSubmit = async () => {
    setIsLoading(true);
    const ownServerStatus = await handleUploadPanNumberOwnServer({
      mobile: worUser?.mobile ?? "",
      docsNumber: aadharNumber,
    });
    setIsLoading(false);
    if (ownServerStatus) {
      setOtpVerified(true);
      setAadharNumberDisable(false);
      dispatch(fetchWorUsers());
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    const otpApi = await aadharCardOtpVerification({
      aadharNumber,
      clientId,
      mobile: worUser?.mobile ?? "",
      otp,
    });
    setIsLoading(false);
    if (!otpApi?.status) return;

    setOtpVerified(true);
    dispatch(fetchWorUsers());
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

  const changeDocsType = (value: string) => {
    setDocsType(value);
  };

  const handleUploadImages = async () => {
    if (!images.docFront || !images.docBack) {
      errorMsgApi("Select Aadhar/Pan Front and Back Images");
    }

    setImageLoader(true);

    const success = await uploadAadharImages(worUser?.mobile ?? "", images);
    setImageLoader(false);
    if (success) {
      dispatch(fetchWorUsers());
      dispatch(drawerOpenCloseModalFunc(false));
    }
  };

  // update automatically when when have data

  const handleSetApiDocsNumber = () => {
    let value;
    if (
      worUser?.docsNumber?.newAadharNumber &&
      worUser?.adminDocsVerified?.adminAadharVerified === "rejected"
    ) {
      value = worUser?.docsNumber?.newAadharNumber;
      setAadharNumberDisable(false);
      setImageEnable(true);
    } else if (worUser?.docsNumber?.newAadharNumber) {
      value = worUser?.docsNumber?.newAadharNumber;
      setAadharNumberDisable(true);
    } else {
      value = aadharNumber;
    }

    setAadharNumber(value);
  };

  const handleSetDocsType = () => {
    if (worUser?.docsNumber?.newAadharNumber?.length === 12) {
      setDocsType("Aadhar");
    } else if (worUser?.docsNumber?.newAadharNumber?.length === 10) {
      setDocsType("Pan");
    } else {
      setDocsType("");
    }
  };

  useEffect(() => {
    if (worUser) {
      handleSetApiDocsNumber();
      handleSetDocsType();
    }
  }, [worUser]);

  return {
    worUser,
    aadharNumber,
    setAadharNumber,
    otp,
    setOtp,
    otpSent,
    isLoading,
    images,
    handleGetOtp,
    handleVerifyOtp,
    handleImageUpload,
    otpVerified,
    // docs type
    changeDocsType,
    docsType,
    handleUploadImages,
    imageLoader,
    // disable states
    aadharNumberDisable,
    imageEnable,
  };
};
