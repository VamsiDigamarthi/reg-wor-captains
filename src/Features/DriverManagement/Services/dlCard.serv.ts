import { API } from "../../../Core/url";

type DlParamsType = {
  mobile: string;
  docsNumber: string;
  dob: string;
};

export const handleUploadLicOwnServer = async ({
  mobile,
  docsNumber,
  dob,
}: DlParamsType) => {
  try {
    await API.patch(`/auth/store-docts-number/${mobile}`, {
      newLicenNumber: docsNumber,
      dob,
    });
    return true;
  } catch (error) {
    return false;
  }
};
