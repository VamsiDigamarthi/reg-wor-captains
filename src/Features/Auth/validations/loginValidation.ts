import { LoginUserData } from "../Types/authTypes";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const loginValidation = (userData: LoginUserData) => {
  let isValid = true;
  const errorsTemp: LoginUserData = { userName: "", password: "" };

  if (!emailRegex.test(userData.userName)) {
    errorsTemp.userName = "Please enter a valid email address.";
    isValid = false;
  }

  if (userData.password === "") {
    errorsTemp.password = "Password field is required.";
    isValid = false;
  }

  return {
    status: isValid,
    errMgs: errorsTemp,
  };
};
