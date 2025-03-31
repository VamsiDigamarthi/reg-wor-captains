import { API } from "../../../Core/url";

export const editProfile = async ({
  mobile,
  name,
  email,
}: {
  mobile: string;
  name: string;
  email: string;
}) => {
  if (!mobile) return;
  try {
    await API.patch("/auth/reg-captain-edit", {
      name,
      email,
      mobile,
    });
    return true;
  } catch (error) {
    return false;
  }
};
