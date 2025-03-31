import { ChangeEvent, useState } from "react";
import ModalLayout from "../../../Layout/ModalLayout";
import Input from "../../../SharedComponents/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import Button from "../../../SharedComponents/Button";
import { errorMsgApi } from "../../../Core/toast";
import { editProfile } from "../Services/EditProfile.serv";
import { fetchWorUsers } from "../../DashBoard/Redux/reCaptainSlice";
import { closeModal } from "../../../Redux/modalFeatureSlice";

type EditBasicDataType = {
  name: string;
  email: string | null;
};

const BasicDetailsModal = () => {
  const { worUser } = useSelector((state: RootState) => state.worUser);
  const dispatch: AppDispatch = useDispatch();

  const [userData, setUserData] = useState<EditBasicDataType>({
    name: worUser?.name ?? "",
    email: worUser?.email ?? "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmite = async () => {
    if (!userData.name) {
      errorMsgApi("Name Filed Con'b Empty");
      return;
    }
    setLoading(true);
    const data = await editProfile({
      email: userData.email ?? "",
      name: userData.name,
      mobile: worUser?.mobile ?? "",
    });
    if (data) {
      dispatch(fetchWorUsers());
      dispatch(closeModal());
    }
  };

  return (
    <ModalLayout title="Edit Profile" height="350px" width="50%">
      <div className="w-full h-full flex flex-col gap-4">
        <Input
          label="Full Name"
          name="name"
          onChange={handleInputChange}
          value={userData?.name}
        />
        <Input
          label="Email Address"
          name="email"
          onChange={handleInputChange}
          value={userData?.email ?? ""}
        />
        <Button
          bgColor="#e02e88"
          textColor="#fff"
          text="Edit profile"
          onClick={handleSubmite}
          isLoading={loading}
        />
      </div>
    </ModalLayout>
  );
};

export default BasicDetailsModal;
