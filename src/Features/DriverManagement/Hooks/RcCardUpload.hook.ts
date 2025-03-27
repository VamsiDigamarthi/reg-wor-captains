import { useEffect, useState } from "react";
import { docsImageType } from "./AadharCardUpload.hook";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { errorMsgApi } from "../../../Core/toast";
import {
  handleUploadRCOwnServer,
  licImageUpload,
} from "../Services/RcCard.serv";
import { fetchWorUsers } from "../../DashBoard/Redux/reCaptainSlice";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";

export const useRcCardUploadHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const { worUser } = useSelector((state: RootState) => state.worUser);

  const [docsNumber, setDocsNumber] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [disableInput, setDisableInput] = useState(false);
  const [disableImage, setDisableImage] = useState<boolean>(false);

  const [images, setImages] = useState<docsImageType>({
    front: null,
    back: null,
    docFront: null,
    docBack: null,
  });

  const handleSubmitRcNumber = async () => {
    if (!docsNumber) {
      errorMsgApi("Please Enter a Valid Number");
      return;
    }
    setIsLoading(true);
    const data = await handleUploadRCOwnServer({
      mobile: worUser?.mobile ?? "",
      rcNumber: docsNumber,
      serviceType: worUser?.services?.[0]?.serviceType ?? "",
    });

    setIsLoading(false);
    if (data) {
      dispatch(fetchWorUsers());
      setDisableInput(true);
      setDisableImage(true);
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

  const handleUploadImages = async () => {
    if (!images.docFront || !images.docBack) {
      errorMsgApi("Select Aadhar/Pan Front and Back Images");
    }
    setIsLoading(true);
    const data = await licImageUpload(
      worUser?.mobile ?? "",
      images,
      worUser?.services?.[0]?.serviceType ?? ""
    );
    if (data) {
      dispatch(fetchWorUsers());
      dispatch(drawerOpenCloseModalFunc(false));
    }
  };

  //   auto bide values

  const handleSetApiDocsNumber = () => {
    let value;
    if (
      worUser?.services?.[0]?.rcNumber &&
      worUser?.services?.[0]?.rcVerificationStatuc === "rejected"
    ) {
      value = worUser?.services?.[0]?.rcNumber;

      setDisableInput(false);
      setDisableImage(true);
    } else if (worUser?.services?.[0]?.rcNumber) {
      value = worUser?.services?.[0]?.rcNumber;
      setDisableInput(true);
    } else {
      value = docsNumber;
    }
    setDocsNumber(value);
  };

  useEffect(() => {
    handleSetApiDocsNumber();
  }, [worUser]);

  return {
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
  };
};
