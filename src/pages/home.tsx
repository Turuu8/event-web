/* eslint-disable react-hooks/rules-of-hooks */
import React, { Dispatch, SetStateAction, useState } from "react";
import HeroSection from "@/components/home/Hero";
import Image from "next/image";
import { MoreCarts, categories } from "@/utils";
import { EventCart } from "@/components/EventCart";
import { gql, useQuery } from "@apollo/client";

const GET_DOGS = gql`
  query Events {
    events {
      title
    }
  }
`;

const home = () => {
  const [current, setCurrent] = useState<boolean>(true);
  const { loading, error, data } = useQuery(GET_DOGS);
  console.log(data);

  return (
    <>
      <HeroSection state={{ current, setCurrent }} />
      {current ? null : (
        <section className="w-full h-full px-[80px] max-w-[1920px] m-auto">
          {/* DATE */}
          <div className="pt-[110px]">
            <h3 className="text-[#fff] text-[32px] font-normal capitalize">date</h3>
            <div className="flex flex-row gap-[32px] pt-[50px]">
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
          {/* CATEGORY */}
          <div className="pt-[80px]">
            <h3 className="text-[#fff] leading-[38px] text-[32px] font-normal capitalize">category</h3>
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
          <div className="flex flex-wrap gap-[25px] pt-[180px]">
            {MoreCarts.map((el, i) => {
              return <EventCart key={i} {...el} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default home;
