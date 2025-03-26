const BarChatCard = () => {
  return (
    <div className="w-[470px]  relative h-[340px] bg-[#fcfcfc] ">
      <div className="w-full h-[300px] bg-white  shadow-custom  absolute bottom-0 left-0 p-4 rounded-xl"></div>

      <div className="w-[96%] absolute left-2 top-1 bg-[#e02e88] rounded-md p-4">
        <p className="text-[14px] text-white font-roboto"> Captains Earning</p>
        <h2 className="text-base font-roboto text-white font-semibold">
          Earning by City
        </h2>
      </div>
    </div>
  );
};

export default BarChatCard;
