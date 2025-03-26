import { useState } from "react";
import { signupDriverValidations } from "../Validations/SignUpDriverVallidation";
import { addRegCaptains } from "../Services/addCaptain.services";
import { fetchWorUsers } from "../../DashBoard/Redux/reCaptainSlice";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";

export type SignupDriverType = {
  name: string;
  mobile: string;
  dob: string;
  email: string;
};

export const useDriverSignupFormHook = () => {
  const dispatch: AppDispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<SignupDriverType>({
    name: "",
    mobile: "",
    dob: "",
    email: "",
  });

  const [error, setError] = useState<SignupDriverType>({
    name: "",
    mobile: "",
    dob: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitCode = async () => {
    const { isValid, newErrors } = signupDriverValidations(formData);
    setError(newErrors || { name: "", mobile: "", dob: "", email: "" });

    if (isValid) {
      setIsLoading(true);
      const data = await addRegCaptains(formData);
      setIsLoading(false);

      if (!data.status) return;

      localStorage.setItem("worUser", JSON.stringify(data?.user));
      dispatch(fetchWorUsers());
    }
  };

  return {
    formData,
    handleChange,
    error,
    handleSubmitCode,
    isLoading,
  };
};
