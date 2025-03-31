import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { imageUrl } from "../../../Core/url";

const DriverProfile = () => {
  const { worUser } = useSelector((state: RootState) => state.worUser);

  let profile = worUser?.profilePic
    ? `${imageUrl}/${worUser?.profilePic}`
    : null;

  return (
    <div className="w-full flex flex-col gap-4 py-2 border-b border-[#e5e7eb]">
      <div className="flex items-center gap-2">
        <div className="w-[65px] h-[65px] bg-red-300 rounded-full">
          {profile && <img src={profile} alt="profile" />}
        </div>
        <div>
          <h2 className="text-xl font-roboto font-semibold ">
            {worUser?.name}
          </h2>
          <span className="text-sm text-gray-400 ">#WR-92729</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <NameCard name="Full Name" value={worUser?.name ?? ""} />
        <NameCard name="Date of Birth" value={worUser?.dob ?? "0000-00-00"} />
      </div>
      <div className="w-full flex items-center justify-between">
        <NameCard
          name="Contact Number"
          value={worUser?.mobile ?? "0000000000"}
        />
        <NameCard
          name="Email Address"
          value={worUser?.email ?? "dummy@gmail.com"}
        />
      </div>
    </div>
  );
};

type NameCardType = {
  name: string;
  value: string;
};

const NameCard: FC<NameCardType> = ({ name, value }) => {
  return (
    <div className="w-1/2 flex flex-col gap-1">
      <span className="text-[11px] text-gray-400 font-roboto">{name}</span>
      <h2 className="text-[15px] font-roboto font-semibold">{value}</h2>
    </div>
  );
};

export default DriverProfile;
