import DriverProfile from "../Components/DriverProfile";
import EditProfileFirstCard from "../Components/EditProfileFirstCard";
import UploadImageDocs from "../Components/UploadImageDocs";

const DriverProfileScreen = () => {
  return (
    <div className="w-full px-8 py-5 shadow-secondShadow bg-white rounded-md flex flex-col gap-4">
      <EditProfileFirstCard />
      <DriverProfile />
      <UploadImageDocs />
      <h2 className="text-base font-roboto font-semibold text-[#000]">
        Driver Skill Verification
      </h2>
      <div className="bg-borderColor p-3 rounded-md w-[60%] text-gray-500">
        Completed basic riding course with excellent performance. Shows good
        control and understanding of traffic riles
      </div>
    </div>
  );
};

export default DriverProfileScreen;
