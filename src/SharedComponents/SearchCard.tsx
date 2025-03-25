import { Search } from "lucide-react";

const SearchCard = () => {
  return (
    <div className="flex items-center gap-4 justify-center border border-borderColor rounded-md px-4 h-[45px]">
      <Search size={18} />
      <input
        type="text"
        className="w-[240px] h-full outline-none border-none text-lg font-roboto"
        placeholder="Search drivers...!"
        name=""
        id=""
      />
    </div>
  );
};

export default SearchCard;
