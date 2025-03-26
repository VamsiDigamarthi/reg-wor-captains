import { API } from "../../../Core/url";
import { SignupDriverType } from "../Hooks/DriverSignUpForm.hook";

export const addRegCaptains = async (formData: SignupDriverType) => {
  let newData = {
    name: formData.name,
    email: formData.email,
    dateOfBirth: formData.dob,
    mobile: formData.mobile,
    deviceId: "dummy-device-id",
    manuallyRegister: true,
    role: "captain",
  };
  try {
    const res = await API.post("/auth/new-register", newData);

    return {
      status: true,
      user: res?.data?.user,
    };
  } catch (error) {
    console.log("Error added register captins", error);
    return { status: false };
  }
};
