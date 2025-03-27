import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/store";
import { useEffect } from "react";
import { fetchWorUsers } from "../Redux/reCaptainSlice";

export const useDashboardHook = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorUsers());
  }, []);
};
