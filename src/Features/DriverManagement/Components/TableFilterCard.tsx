import { Plus } from "lucide-react";
import IconButton from "../../../SharedComponents/IconButton";
import SearchCard from "../../../SharedComponents/SearchCard";
import SelectTag from "../../../SharedComponents/SelectTag";
import { FC, useState } from "react";
import AddDriverCard from "./AddDriverCard";
import Drawer from "../../../SharedComponents/Drawer";
import { selectTagData } from "../../ResWorCaptins/Data/SelectTag.data";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { drawerOpenCloseModalFunc } from "../Slice/drawerSlice";

type TableFilterCardType = {
  text: string;
  subtext: string;
  searchDrivers: (text: string) => void;
  changeOnOffDutty: (type: string) => void;
};

const TableFilterCard: FC<TableFilterCardType> = ({
  subtext,
  text,
  searchDrivers,
  changeOnOffDutty,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const handleOpenDrawer = () => {
    dispatch(drawerOpenCloseModalFunc(false));
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h2 className="text-xl text-primary font-roboto font-semibold">
          {text}
        </h2>
        <span className="text-gray-500 text-[14px] font-roboto">{subtext}</span>
      </div>
      <div className="flex items-center gap-4">
        <SearchCard onChange={searchDrivers} />
        <SelectTag
          firstOptionText="Select Status"
          onChange={changeOnOffDutty}
          options={selectTagData}
        />
        <IconButton
          onClick={handleOpenDrawer}
          Icon={Plus}
          bgColor="#e02e88"
          text="Add Driver"
        />
      </div>
      {/* drawer */}
      <Drawer onClose={handleOpenDrawer}>
        <AddDriverCard />
      </Drawer>
    </div>
  );
};

export default TableFilterCard;
