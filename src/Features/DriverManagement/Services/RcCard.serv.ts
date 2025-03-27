import { AxiosError } from "axios";
import { API } from "../../../Core/url";
import { errorMsgApi } from "../../../Core/toast";

interface AxiosErrorResponse {
  message?: string;
}

export const handleUploadRCOwnServer = async ({
  mobile,
  serviceType,
  rcNumber,
}: {
  mobile: string;
  serviceType: string;
  rcNumber: string;
}) => {
  try {
    await API.patch(`/auth/update-rc-number/${mobile}`, {
      serviceType,
      rcNumber,
    });

    return true;
  } catch (error) {
    const axiosError = error as AxiosError<AxiosErrorResponse>;

    const errorMessage =
      axiosError.response?.data?.message || "Rc Number Update Failed";

    errorMsgApi(errorMessage);

    return false;
  }
};

export const licImageUpload = async (
  mobile: string,
  images: { docFront: File | null; docBack: File | null },
  serviceType: string
) => {
  try {
    const formData = new FormData();

    if (images.docFront) formData.append("rcFrontImage", images.docFront);
    if (images.docBack) formData.append("rcBackImage", images.docBack);
    formData.append("serviceType", serviceType);

    await API.patch(`/auth/update-rc-details/${mobile}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });

    return true;
  } catch (error) {
    // console.log("Upload Rc Image failed", error.response?.data);

    return false;
  }
};
