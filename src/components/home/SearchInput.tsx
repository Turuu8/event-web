import { useChangesNavbarSearch } from "@/context";
import { specialEventCarts } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { SpecialEventCart } from "../EventCart";
import { Special } from "./Special";
import useCategories from "../hook/useCategories";

const breakpoints = [640, 768, 1024];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const SearchInput = ({ set }: { set: any }) => {
  const [currentChoice, setCurrentChoice] = useState();

  const { categories, loading } = useCategories();

  const { search } = useChangesNavbarSearch() as { search: boolean };

  const categoriesArray: object[] = [];
  categories?.map((el: { id: string; name: string }) => categoriesArray.push({ value: el.name, label: el.name }));

  return (
    <>
      <div className="w-full">
        <div className="w-full relative ">
          <input
            type="search"
            placeholder="Хайх"
            className="w-full bg-transparent focus:outline-none h-[33px] pl-[42px] rounded-[8px] border-[0.5px] text-[14px] border-[#C7C9CF] text-[#fff] placeholder-[#C7C9CF] md:h-[40px] md:text-[16px] 2xl:h-[60px] 2xl:text-[18px] 2xl:pl-[50px]"
            onClick={() => set(true)}
            // onBlur={() => set(false)}
          />
          <Image
            width={40}
            height={40}
            src="/otherIcons/search.svg"
            className="absolute top-0 bottom-0 m-auto left-[10px] w-[23px] h-[23px] 2xl:w-[35px] 2xl:h-[35px]"
            alt="search icon"
          />
        </div>
        {/* ----------------------------------------------------- */}
        <div className={`w-full pt-[24px] font-['Inter'] font-[300] ${search ? "" : " hidden"}`}>
          <div className="lg:hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
              {!loading && (
                <>
                  <Select
                    id="long-value-select"
                    instanceId="long-value-select"
                    defaultValue={days[0]}
                    options={days}
                    styles={colourStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                  <Select
                    id="long-value-select"
                    instanceId="long-value-select"
                    defaultValue={categoriesArray[0]}
                    options={categoriesArray}
                    styles={colourStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                  <Select
                    id="long-value-select"
                    instanceId="long-value-select"
                    defaultValue={countries[0]}
                    options={countries}
                    styles={colourStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                  <Select
                    id="long-value-select"
                    instanceId="long-value-select"
                    defaultValue={cities[0]}
                    options={cities}
                    styles={colourStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </>
              )}
            </div>
            {/* search result */}
            <h1 className="pt-[55px] pb-[24px] font-[400] text-[14px] leading-[16px] text-[#C7C9CF]">{`4 илэрц`}</h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-[16px] gap-y-[40px] md:gap-x-[18px] md:gap-y-[45px] lg:grid-cols-4 lg:grid-rows-1 lg:gap-[20px] 2xl:gap-[32px]">
              {specialEventCarts.map((el, i) => {
                return <SpecialEventCart key={i} {...el} />;
              })}
            </div>
          </div>

          <div className="hidden lg:block h-[80vh]">
            <h1 className="text-[#fff] text-[24px] pb-[32px] pt-[80px]">Өдөр</h1>
            <div className="flexrow gap-[16px] pb-[80px] max-[1600px]:gap-[12px] max-[1600px]:pb-[60px]">
              {["Өнөөдөр", "Маргааш", "Энэ долоо хоногт", "Энэ сард"].map((el, i) => {
                return (
                  <button
                    key={i}
                    className={`capitalize text-[#686873] text-[18px] bg-[#12121F] rounded-[8px] px-[24px] py-[12px] focus:bg-[#D22366] focus:text-[#FFF] max-[1600px]:text-[13px] max-[1600px]:p-[8px_18px]`}
                    onClick={() => {}}
                  >
                    <p>{el}</p>
                  </button>
                );
              })}
            </div>
            <h1 className="text-[#fff] text-[24px] pb-[32px] max-[1600px]:text-[18px] max-[1600px]:pb-[25px]">Катигори</h1>
            <div className="flex flex-wrap gap-[16px] pb-[80px] max-[1600px]:gap-[12px]">
              {categories?.map((el: { id: string; name: string }) => {
                return (
                  <button
                    key={el.id}
                    className={`capitalize text-[#686873] text-[18px] bg-[#12121F] rounded-[8px] px-[24px] py-[12px] max-[1600px]:text-[13px] max-[1600px]:p-[8px_18px]`}
                    onClick={(e) => {
                      set(true);
                      e.currentTarget.style.background = "#D22366";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    <p>{el.name}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const colourStyles: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? "#D22366" : "black",
    borderWidth: "0.5px",
    borderRadius: "8px",
    borderColor: isFocused ? "#D22366" : "#C7C9CF",
    boxShadow: "none",
    padding: 0,
    height: "33px",
    textTransform: "capitalize",
    color: isFocused ? "#fff" : "#C7C9CF",
    [mq[0]]: {
      height: "40px",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#D22366" : "black",
      borderRadius: "8px",
      color: "#fff",
    };
  },
  menuList: (styles) => ({
    ...styles,
    // padding: 0,
    backgroundColor: "#000",
    textTransform: "capitalize",
    fontSize: "12px",
    lineHeight: "14px",
    [mq[1]]: {
      fontSize: "14px",
      lineHeight: "16px",
    },
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "#FFF" : "#C7C9CF", // Custom colour
  }),
  singleValue: (styles, state: any) => ({
    ...styles,
    fontSize: "12px",
    lineHeight: "14px",
    [mq[1]]: {
      fontSize: "14px",
      lineHeight: "16px",
    },
    color: state.selectProps.changeInput,
  }),
};

const days = [
  { value: "Өнөөдөр", label: "Өнөөдөр" },
  { value: "Маргааш", label: "Маргааш" },
  { value: "Энэ долоо хоногт", label: "Энэ долоо хоногт" },
  { value: "Энэ сард", label: "Энэ сард" },
];

const countries = [{ value: "улаабаатар, монгол", label: "улаабаатар, монгол" }];

const cities = [
  { value: "дархан", label: "дархан" },
  { value: "эрдэнэт", label: "эрдэнэт" },
];
