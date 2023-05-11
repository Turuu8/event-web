import { EventCart } from "@/components/EventCart";
import { MoreCarts, categories } from "@/utils";
import Image from "next/image";
import React from "react";

const events = () => {
  return (
    <main className="pt-[250px] px-[80px] max-w-[1920px] w-full m-auto">
      <div className="w-full h-full relative">
        <Image width={1000} height={1000} alt="special event" src="/bgImages/special.jpeg" className="w-full" />
        <div className="absolute left-[100px] bottom-[100px]">
          <h3 className="font-['Roboto'] font-light text-[24px] text-[#fff]">This Week Special</h3>
          <h2 className="font-['Roboto'] font-medium text-[52px] text-[#fff]">The World Of Hans Zimmer </h2>
          <div className="flex pt-[32px] gap-[60px] font-['Roboto'] font-light text-[#fff]">
            <button className="px-[24px] py-[12px] border-[3px] rounded-[25px]">
              <p className="text-[24px] leading-[28px]">Get ticket</p>
            </button>
            <button className="px-[24px] py-[12px] ">
              <p className="text-[24px] leading-[28px] border-b-[3px] border-[#D22366]">Learn More</p>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[132px]">
        <h3 className="text-[#fff] leading-[38px] text-[32px] font-normal capitalize">line-up</h3>
        <div className="flex flex-wrap  gap-[32px] pt-[50px] w-full box-border">
          {categories.map((el, i) => {
            return (
              <button
                className="flex flex-row items-center justify-center h-[64px] bg-[#12121F] text-[#686873] rounded-[30px] pl-[15px] pr-[20px] gap-[5px] py-[12px] duration-[0.5s] focus:bg-[#D22366] focus:text-[#FFF]"
                key={i}
                onClick={() => console.log(el.title)}
              >
                <Image
                  src={el.svg}
                  width={40}
                  height={40}
                  alt="categor icon"
                  className="max-w-[40px] max-h-[40px] min-w-[40px] min-h-[40px] focus:opacity-0"
                />
                <h3 className="text-[24px] font-normal font-['Inter'] capitalize">{el.title}</h3>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-[25px] pt-[132px]">
        {MoreCarts.map((el, i) => {
          return <EventCart key={i} {...el} />;
        })}
      </div>
    </main>
  );
};

export default events;
