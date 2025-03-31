import axios, { AxiosError } from "axios";
import { errorMsgApi } from "../../../Core/toast";
import { API } from "../../../Core/url";

interface AxiosErrorResponse {
  message?: string;
}

const surePassApiKay =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczODczOTM2NCwianRpIjoiNDQwNjBkNWMtODA5NC00MTYxLWEyODktMTQ5M2JmOGNhNjQxIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2Lm51aHZpbjAyQHN1cmVwYXNzLmlvIiwibmJmIjoxNzM4NzM5MzY0LCJleHAiOjIzNjk0NTkzNjQsImVtYWlsIjoibnVodmluMDJAc3VyZXBhc3MuaW8iLCJ0ZW5hbnRfaWQiOiJtYWluIiwidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInVzZXIiXX19.FKrt3pav4Ls7zcOojQ51GijcW-YImN62xNhkx2K_4uY";

export const aadharNumberSendOtp = async ({
  aadharNumber,
}: {
  aadharNumber: string;
}) => {
  try {
    const response = await axios.post(
      "https://kyc-api.surepass.io/api/v1/aadhaar-v2/generate-otp",
      {
        id_number: aadharNumber,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${surePassApiKay}`,
        },
      }
    );
    console.log(response?.data?.data?.client_id);

    return {
      status: true,
      clientId: response?.data?.data?.client_id,
    };
  } catch (error) {
    const axiosError = error as AxiosError<AxiosErrorResponse>;
    console.log("aadhar api failed");

    // ✅ Get error message safely
    const errorMessage =
      axiosError.response?.data?.message ||
      "Sending OTP failed, please try again";

    errorMsgApi(errorMessage);

    return {
      status: false,
      error: "Sending OTP failed please try again",
    };
  }
};

// submite aadhar details to backnend

const handleUploadAdharDetailsToServer = async ({
  data,
  mobile,
  aadharNumber,
}: {
  data: unknown;
  mobile: string;
  aadharNumber: string;
}) => {
  try {
    await API.patch(
      `/auth/aadhar-card-verification/${mobile}/${aadharNumber}`,
      { data },
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      status: true,
    };
  } catch (error) {
    const axiosError = error as AxiosError<AxiosErrorResponse>;

    console.log(
      "aadhar supepass data upload failed",
      axiosError?.response?.data?.message
    );

    errorMsgApi(
      axiosError?.response?.data?.message ||
        // data?.error ||
        "WoR Services Failed to Update Your Data Please try again after some time "
    );

    return {
      status: false,
      error: axiosError?.response?.data?.message,
    };
  }
};

export const aadharCardOtpVerification = async ({
  otp,
  clientId,
  mobile,
  aadharNumber,
}: {
  otp: string;
  clientId: string;
  mobile: string;
  aadharNumber: string;
}) => {
  try {
    const response = await axios.post(
      "https://kyc-api.surepass.io/api/v1/aadhaar-v2/submit-otp",
      {
        otp: otp,
        client_id: clientId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${surePassApiKay}`, // Passing the token in the Authorization header
        },
      }
    );
    console.log(response?.data?.data);
    const data = await handleUploadAdharDetailsToServer({
      data: response?.data?.data,
      mobile,
      aadharNumber,
    });

    // console.log("data", data);

    if (data?.status) {
      return {
        status: true,
      };
    }
  } catch (error) {
    const axiosError = error as AxiosError<AxiosErrorResponse>;

    errorMsgApi(
      axiosError?.response?.data?.message || "Adhar  Otp verification Failed"
    );

    return {
      status: false,
      error: "OTP Verification Failed",
    };
  }
};

export const uploadAadharImages = async (
  mobile: string,
  images: { docFront: File | null; docBack: File | null }
) => {
  const formData = new FormData();

  if (images.docFront) formData.append("adhar", images.docFront);
  if (images.docBack) formData.append("adharBack", images.docBack);

  try {
    await API.patch(`/captain/upload-security-image/${mobile}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Upload Failed", error);
    return false;
  }
};

export const handleUploadPanNumberOwnServer = async ({
  mobile,
  docsNumber,
}: {
  mobile: string;
  docsNumber: string;
}) => {
  try {
    await API.patch(`/auth/store-docts-number/${mobile}`, {
      newAadharNumber: docsNumber,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const uploadDlImages = async (
  mobile: string,
  images: { docFront: File | null; docBack: File | null }
) => {
  const formData = new FormData();

  if (images.docFront) formData.append("license", images.docFront);
  if (images.docBack) formData.append("licenseBack", images.docBack);

  try {
    await API.patch(`/captain/upload-security-image/${mobile}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Upload Failed", error);
    return false;
  }
};

export const uploadVehicleImage = async (
  mobile: string,
  images: {
    docsFront: File | null;
    docsBack: File | null;
    docsRight: File | null;
    docsLeft: File | null;
    docsNumberPlate: File | null;
    docsHelmet: File | null;
  },
  serviceType: string
) => {
  const formData = new FormData();

  if (images.docsFront) formData.append("vehicleFrontImage", images.docsFront);
  if (images.docsBack) formData.append("vehicleBackImage", images.docsBack);

  if (images.docsRight) formData.append("vehicleRightImage", images.docsRight);

  if (images.docsLeft) formData.append("vehicleLeftImage", images.docsLeft);

  if (images.docsNumberPlate)
    formData.append("vehicleNumberPlate", images.docsNumberPlate);

  if (images.docsHelmet)
    formData.append("vehicleHelmetImage", images.docsHelmet);

  formData.append("serviceType", serviceType);

  try {
    await API.patch(`/auth/update-rc-details/${mobile}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Upload Failed", error);
    return false;
  }
};

export const certificationUpload = async (
  mobile: string,
  images: {
    docFront: File | null;
  },
  serviceType: string
) => {
  const formData = new FormData();

  if (images.docFront) formData.append("fitnessCer", images.docFront);

  formData.append("serviceType", serviceType);
  try {
    await API.patch(`/auth/update-rc-details/${mobile}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Upload Failed", error);
    return false;
  }
};

export const insuranceUpload = async (
  mobile: string,
  images: {
    docFront: File | null;
  },
  serviceType: string
) => {
  const formData = new FormData();

  if (images.docFront) formData.append("insuranceImg", images.docFront);

  formData.append("serviceType", serviceType);
  try {
    await API.patch(`/auth/update-rc-details/${mobile}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Upload Failed", error);
    return false;
  }
};
