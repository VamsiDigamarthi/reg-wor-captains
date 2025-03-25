import logo from "../assets/logo.png";

const SideBarProfileCard = () => {
  return (
    <div className="w-full flex flex-col gap-1 items-center justify-center pt-9">
      <img className="w-[80px]" src={logo} alt="logo-png" />
      <img
        className="w-[70px] h-[70px] rounded-full bg-lime-300"
        src="https://snapynow.com/wp-content/uploads/cute-girl-dp16.jpg"
        alt="profile-pic"
      />
      <h2 className="text-[16px] font-normal font-roboto">Ride Manager</h2>
      <p className="text-[12px] font-roboto font-normal">
        ridemanager@gmail.com
      </p>
    </div>
  );
};

export default SideBarProfileCard;
