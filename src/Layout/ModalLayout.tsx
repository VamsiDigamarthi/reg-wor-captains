import { type FC, type ReactNode } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { X } from "lucide-react";
import { closeModal } from "../Redux/modalFeatureSlice";

type ModalTemplateProps = {
  title: string;
  children: ReactNode;
  width?: string;
  height?: string;
  clearFormData?: () => void;
};

const ModalLayout: FC<ModalTemplateProps> = ({
  width,
  title,
  children,
  height,
  clearFormData,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(closeModal());
    if (clearFormData) {
      clearFormData();
    }
  };

  return (
    <div
      className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
    >
      <div
        style={{ width, height }}
        className="w-[90%] h-[90%] shadow-custom bg-white p-12 flex flex-col gap-4 rounded-md"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-[600]">{title}</h2>
          <button onClick={onCloseModal}>
            <X size={25} />
          </button>
        </div>
        <div className="w-full h-[95%] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
