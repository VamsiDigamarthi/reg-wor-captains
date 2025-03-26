import { SignupDriverType } from "../Hooks/DriverSignUpForm.hook";

export const signupDriverValidations = (formData: SignupDriverType) => {
  let isValid = true;
  let newErrors: SignupDriverType = {
    name: "",
    mobile: "",
    dob: "",
    email: "",
  };

  if (!formData.name.trim()) {
    newErrors.name = "Full name is required";
    isValid = false;
  }

  if (!formData.mobile.trim()) {
    newErrors.mobile = "Contact number is required";
    isValid = false;
  } else if (!/^\d{10}$/.test(formData.mobile)) {
    newErrors.mobile = "Enter a valid 10-digit contact number";
    isValid = false;
  }

  if (!formData.dob) {
    newErrors.dob = "Date of birth is required";
    isValid = false;
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
    isValid = false;
  }
  return { isValid, newErrors: isValid ? null : newErrors };
};
