import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

type DrawerProps = {
  onClose: () => void;
  children: ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ onClose, children }) => {
  const { drawerOpen, isActionBtn } = useSelector(
    (state: RootState) => state.drawer
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        />
      )}
      {drawerOpen && (
        <ChevronRight
          onClick={onClose}
          className="fixed left-[calc(60%-40px)] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 w-8 h-8 cursor-pointer z-50"
        />
      )}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: drawerOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-[40%] h-full bg-white shadow-lg z-50 p-5 flex flex-col gap-4"
      >
        <div className="flex justify-between items-center text-base font-roboto">
          <h2 className="text-lg font-bold mb-4">
            {isActionBtn ? "Edit" : "Add"} Driver
          </h2>
          <X onClick={onClose} className="-mt-2 text-gray-500 cursor-pointer" />
        </div>
        <div className="w-full h-[95%] overflow-y-scroll">{children}</div>
      </motion.div>
    </>
  );
};

export default Drawer;
