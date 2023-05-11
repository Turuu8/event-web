import Image from "next/image";
import React from "react";

const favorites = () => {
  return (
    <main className="bg-[##0A000B] max-w-[1920px] m-auto  pt-[130px] px-[80px]">
      <div className="h-[80%] w-[24%] absolute z-[-1] bottom-0 right-0">
        <Image width={455} height={1180} alt="background image" src="/bgImages/back3.png" className={`w-full h-full object-cover duration-[0.5s] `} />
      </div>
      <div className="pt-[7%]">
        <h1 className="text-[#fff] text-[60px] font-light">Favorites</h1>
        <p className="text-[#C7C9CF] text-[24px] font-['Inter'] font-light">No liked events yet we could help you find event.</p>
        <div className="flex flex-row gap-[32px] pt-[100px]">
          {["today", "tomorrow", "this week", "this month"].map((el, i) => {
            return (
              <button
                key={i}
                className="px-[24px] py-[12px] rounded-[25px] bg-[#12121F] text-[#686873] duration-[0.5s] focus:bg-[#D22366] focus:text-[#FFF]"
              >
                <h3 className="leading-[28px] font-['Roboto'] text-[24px] font-light capitalize ">{el}</h3>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default favorites;
