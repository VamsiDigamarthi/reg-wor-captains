import PaymentLeftSide from "../Components/PaymentLeftSide";
import PaymentManagementFirst from "../Components/PaymentManagementFirst";
import PaymentRightSide from "../Components/PaymentRightSide";

const PaymentManagementScreen = () => {
  return (
    <div className="flex flex-col gap-4 p-4 ">
      <div className="w-full shadow-secondShadow bg-white rounded-md  px-8 py-5  flex flex-col gap-4">
        <PaymentManagementFirst
          approvedDrivers={20}
          pendingDrivers={10}
          rejectDrivers={2}
          subtext="Drivers Profile"
          text="Payment Issuse Verification"
        />

        <div className="w-full flex gap-4">
          <PaymentLeftSide />
          <PaymentRightSide />
        </div>
      </div>
    </div>
  );
};

export default PaymentManagementScreen;
