import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { LoginUserData } from "../Types/authTypes";
import { userLogin } from "../Slice/loginSlice";
import { loginValidation } from "../validations/loginValidation";

export const useLoginScreenHook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, token, error } = useSelector(
    (state: RootState) => state.token
  );

  const [userData, setUserData] = useState<LoginUserData>({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitLogic = async () => {
    const validation = loginValidation(userData);
    if (validation.status) {
      setErrors({
        userName: "",
        password: "",
      });

      dispatch(userLogin({ userData }));
    } else {
      setErrors(validation.errMgs);
      console.log("Validation failed:", validation.errMgs);
    }
  };

  useEffect(() => {
    let localToken = localStorage.getItem("token");
    if (token || localToken) {
      navigate("/");
    }
  }, [token, navigate]);

  return {
    handleSubmitLogic,
    handleInputChange,
    userData,
    loading,
    errors,
    error,
  };
};
