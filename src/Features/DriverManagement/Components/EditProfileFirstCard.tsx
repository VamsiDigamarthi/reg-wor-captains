import { Pencil } from "lucide-react";
import IconButton from "../../../SharedComponents/IconButton";
import { changeDriverListOrItemComponent } from "../Slice/isDisplayDriverListOrDriverDetails.slice";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../Redux/modalFeatureSlice";
import BasicDetailsModal from "../Modals/BasicDetailsModal";

const EditProfileFirstCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const { activeModal } = useSelector((state: RootState) => state.modal);

  const handleOpenProfile = () => {
    dispatch(changeDriverListOrItemComponent());
  };

  const handleEditModal = () => {
    dispatch(openModal("Edit Basic Driver details"));
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-roboto font-semibold text-[#e02e88]">
            Driver Profile
          </h2>
          <span className="text-base text-gray-500">Drivers Profile</span>
        </div>
        <div className="flex items-center gap-4">
          <span
            onClick={handleOpenProfile}
            className="w-[120px] h-[45px] bg-orange-400 rounded-lg flex justify-center items-center text-base font-roboto cursor-pointer"
          >
            Back
          </span>
          <span className="w-[120px] h-[45px] bg-green-100 rounded-lg flex justify-center items-center text-base font-roboto cursor-pointer">
            Active
          </span>
          <IconButton
            onClick={handleEditModal}
            Icon={Pencil}
            bgColor="#e02d88"
            text="Edit Profile"
          />
        </div>
      </div>
      {/* edit profile modal */}
      {activeModal === "Edit Basic Driver details" && <BasicDetailsModal />}
    </>
  );
};

export default EditProfileFirstCard;
