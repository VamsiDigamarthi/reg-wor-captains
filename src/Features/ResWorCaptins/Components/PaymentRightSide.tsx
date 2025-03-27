import dummyImagePlaceHolder from "../../../assets/dummy-img.png";
import Button from "../../../SharedComponents/Button";

const PaymentRightSide = () => {
  return (
    <div className="w-2/3 rounded-md shadow-secondShadow flex flex-col gap-2">
      <div className="flex justify-between items-center border-b border-gray-200 p-3">
        <h2 className="text-base font-roboto font-normal">Issue Detail</h2>
        <button className=" bg-[#fef9c3] rounded-xl px-4 py-2">Pending</button>
      </div>
      <div className="w-full flex justify-between items-center px-4 p-2 gap-6">
        <div className="w-1/2  flex flex-col gap-2">
          <h2 className="text-base font-roboto font-semibold ">
            Transaction Information
          </h2>
          <div className="flex justify-between items-center">
            <span className="text-base font-normal font-roboto text-[#4B5563]">
              Transaction ID:
            </span>
            <span className="text-base font-normal font-roboto text-[#1F2937]">
              TXN-89045
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-normal font-roboto text-[#4B5563]">
              Payment Method:
            </span>
            <span className="text-base font-normal font-roboto text-[#1F2937]">
              UPI
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-normal font-roboto text-[#4B5563]">
              Amount:
            </span>
            <span className="text-base font-normal font-roboto text-[#1F2937]">
              ₹1,499.00
            </span>
          </div>
        </div>
        <div className="w-1/2  flex flex-col gap-2">
          <h2 className="text-base font-roboto font-semibold ">
            User Information
          </h2>
          <div className="flex justify-between items-center">
            <span className="text-base font-normal font-roboto text-[#4B5563]">
              Full Name:
            </span>
            <span className="text-base font-normal font-roboto text-[#1F2937]">
              Dharani s
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-normal font-roboto text-[#4B5563]">
              Email:
            </span>
            <span className="text-base font-normal font-roboto text-[#1F2937]">
              Dharani@example.com
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-normal font-roboto text-[#4B5563]">
              Contact:
            </span>
            <span className="text-base font-normal font-roboto text-[#1F2937]">
              +91 98765 43210
            </span>
          </div>
        </div>
      </div>
      {/* issue descrption */}
      <div className="w-full flex flex-col gap-4 px-4 p-2 ">
        <h2 className="text-base font-roboto font-semibold ">
          Issue Description
        </h2>
        <p className="text-sm font-roboto font-normal">
          Payment was deducted but order shows as failed. The amount has not
          been refunded to my account yet.
        </p>
        <div className="flex items-center gap-4">
          <div className="w-[120px] h-[120px] bg-gray-100 rounded-md flex justify-center items-center">
            <img src={dummyImagePlaceHolder} className="w-[40px]" alt="" />
          </div>
          <div>
            <h2 className="text-base font-semibold font-roboto">
              Transaction Screenshot
            </h2>
            <p className="text-sm font-normal font-roboto">
              Click to view full size
            </p>
          </div>
        </div>
      </div>
      {/* admin note */}
      <div className="w-full flex flex-col gap-4 px-4 p-2">
        <h2 className="text-base font-roboto font-semibold ">Admin Notes</h2>
        <textarea
          name=""
          className="w-full h-[100px] border border-secondBorerColor outline-none rounded-md p-3"
          id=""
        ></textarea>
      </div>
      <div className="flex justify-end items-end w-full gap-5 px-4 p-2">
        <Button bgColor="#FFEDD5" text="Escalate" textColor="#C2410C" />
        <Button bgColor="#DBEAFE" text="Issue Refund" textColor="#1D4ED8" />
        <Button bgColor="#16A34A" text="Mark as Resolved" textColor="#fff" />
      </div>
    </div>
  );
};

export default PaymentRightSide;
