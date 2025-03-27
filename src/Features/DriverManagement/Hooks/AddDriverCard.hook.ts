import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

export const useAddDriverCardHook = () => {
  const { worUser } = useSelector((state: RootState) => state.worUser);

  const { isActionBtn } = useSelector((state: RootState) => state.drawer);
  return {
    isActionBtn,
    worUser,
  };
};
