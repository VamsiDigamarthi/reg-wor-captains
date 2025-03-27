import { LucideIcon } from "lucide-react";
import { FC } from "react";

type NotficationIssueCardType = {
  text: string;
  Icon: LucideIcon;
  count: number;
};

const NotficationIssueCard: FC<NotficationIssueCardType> = ({
  text,
  Icon,
  count,
}) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Icon />
        <span className="text-base font-normal font-roboto">{text}</span>
      </div>
      <h2 className="font-semibold font-roboto text-lg text-black">{count}</h2>
    </div>
  );
};

export default NotficationIssueCard;
