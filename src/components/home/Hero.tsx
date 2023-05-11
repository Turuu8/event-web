import { log } from "console";
import Image from "next/image";
import React, { useState } from "react";

const HeroSection = (props: { state: { current: boolean; setCurrent: Function } }) => {
  return (
    <main className="bg-[##0A000B] max-w-[1920px] m-auto  pt-[130px] px-[80px]">
      {/* background image */}
      <>
        <Image
          width={565}
          height={1000}
          alt="background image"
          src="/bgImages/back1.png"
          priority={true}
          className={`w-[29%] absolute z-[-1] left-0 top-0 duration-[0.5s]
          ${props.state.current ? "opacity-100" : "opacity-0"}`}
        />
        <div className="w-[25%] h-[55%] absolute z-[-1] top-[45%] left-[24%]">
          <Image
            width={700}
            height={705}
            alt="background image"
            src="/bgImages/back2.png"
            priority={true}
            className={`w-full h-full object-cover duration-[0.5s] ${props.state.current ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <div className="h-[80%] w-[24%] absolute z-[-1] bottom-0 right-0">
          <Image
            width={455}
            height={1180}
            alt="background image"
            src="/bgImages/back3.png"
            priority={true}
            className={`w-full h-full object-cover duration-[0.5s] ${props.state.current ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </>
      {/* search */}
      <div className="w-full h-full flex">
        <div className={`h-[235px] w-[1165px] duration-[0.5s] ${props.state.current ? "m-[20%_auto_auto_17%]" : "m-[80px_auto_auto_0]"}`}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-[60px] text-[#fff] font-['Poppins'] font-light">
                {props.state.current ? "Every day can be special." : "Search anything"}
              </h2>
              <h2 className="text-[24px] text-[#686873] font-['Poppins'] font-light">You need to search your event.</h2>
            </div>
            <div className="flex gap-[30px]">
              <div className="w-[550px] h-[60px] relative">
                <input
                  className={`text-[18px] w-full h-full rounded-[25px] pl-[55px]  duration-[0.5s] text-[#fff] 
                  ${props.state.current ? " bg-[#F7F7F780] placeholder-white " : " bg-[#12121F] placeholder-[#686873] "}`}
                  placeholder="Search"
                  onFocus={() => {
                    props.state.setCurrent(false);
                  }}
                  // onBlur={() => {
                  //   props.state.setCurrent(true);
                  // }}
                />
                <Image
                  width={24}
                  height={24}
                  alt="search icon"
                  className={`max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] absolute top-0 bottom-0 left-[19px] m-auto duration-[0.5s] 
                  ${props.state.current ? "" : " opacity-[0.5] "}
                  `}
                  src="/otherIcons/search.svg"
                />
              </div>
              <div className="w-[250px] h-[60px] relative">
                <input
                  className={`text-[18px] w-full h-full rounded-[25px] pl-[55px] duration-[0.5s] text-[#fff]
                  ${props.state.current ? " bg-[#F7F7F780] placeholder-white " : " bg-[#12121F] placeholder-[#686873] "}`}
                  placeholder="Any location"
                  onFocus={() => {
                    props.state.setCurrent(false);
                  }}
                  // onBlur={() => {
                  //   props.state.setCurrent(true);
                  // }}
                />
                <Image
                  width={24}
                  height={24}
                  alt="search icon"
                  className={`max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] absolute top-0 bottom-0 left-[19px] m-auto  duration-[0.5s] 
                  ${props.state.current ? "" : " opacity-[0.5] "}
                  `}
                  src="/otherIcons/location.svg"
                />
              </div>
              <button className="w-[275px] h-[60px] rounded-[25px] bg-[#D22366]" onClick={() => console.log("Find Event")}>
                <h3 className="text-[#fff] font-['Inter'] text-[18px] font-normal">Find Event</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
