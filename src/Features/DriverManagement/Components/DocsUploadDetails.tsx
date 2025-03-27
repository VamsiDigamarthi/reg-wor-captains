import AadharUploadCard from "./AadharUploadCard";
import DlUploadCard from "./DlUploadCard";
import RcUploadCard from "./RcUploadCard";

export const DocsUploadDetails = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <AadharUploadCard />
      <RcUploadCard />
      <DlUploadCard />
    </div>
  );
};
