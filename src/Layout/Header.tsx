import { useEffect, useRef, useState } from "react";
import { BellDot, Phone, Search } from "lucide-react";
import BorderIcon from "../SharedComponents/BorderIcon";
import IconButton from "../SharedComponents/IconButton";
import NotificationModal from "./NotificationModal";

const Header = () => {
  const [isOpenNotificationModal, setIsOpenNotificationModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpenNotificationModal(false);
      }
    };

    if (isOpenNotificationModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenNotificationModal]);

  return (
    <header className="w-full h-[70px] bg-white flex justify-between items-center px-6 border-b border-gray-300 relative">
      <div>
        <h2 className="text-lg font-semibold font-roboto">Welcome MR Chintu</h2>
        <p className="text-[14px] font-normal font-roboto">
          Sunday <span className="text-[13px] text-gray-500">18, Jun 2025</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <BorderIcon Icon={Search} />
        <BorderIcon
          Icon={BellDot}
          onClick={() => setIsOpenNotificationModal(true)}
        />
        <IconButton Icon={Phone} bgColor="#f45050" text="Support" />
      </div>

      {isOpenNotificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>
      )}

      {/* Modal with ref */}
      {isOpenNotificationModal && (
        <div
          ref={modalRef}
          className="absolute top-[75px] right-[15%]  w-[350px] rounded-md shadow-secondShadow bg-white px-4 py-6 flex flex-col gap-6 z-50"
        >
          <NotificationModal />
        </div>
      )}
    </header>
  );
};

export default Header;
