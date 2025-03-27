import AadharUploadCard from "./AadharUploadCard";

export const DocsUploadDetails = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-[14px] font-poppings font-semibold">
        Aadhar Card Details
      </h3>
      <AadharUploadCard />
    </div>
  );
};
