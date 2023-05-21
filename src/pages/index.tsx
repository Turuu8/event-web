import { BigEventCart, Login, SearchInput, SpecialEventCart } from "@/components";
import { useAuthContext, useChangesNavbarSearch } from "@/context";
import { GET_CATEGORIES, GET_EVENT, GET_EVENTS } from "@/graphql";
import { bigEventCarts, specialEventCarts } from "@/utils";
import { useQuery } from "@apollo/client";
import { Dispatch, SetStateAction, useState } from "react";

export default function Home() {
  const { search, setSearch } = useChangesNavbarSearch() as { search: boolean; setSearch: Dispatch<SetStateAction<boolean>> };
  const { loading, error, data } = useQuery(GET_EVENTS);
  const { clickButton } = useAuthContext();
  const { loginButton } = clickButton;

  return (
    <>
      {loginButton && <Login />}
      <main className={`w-full font-['Inter'] relative duration-[0.3s]  ${search ? "bg-[#0A000B]" : ""}`}>
        <div
          className={`bg-[url('/images/homeBack.jpeg')] bg-no-repeat bg-cover w-full h-[115vh] z-[-1] absolute duration-[0.5s] ${
            search ? "opacity-0 h-[100vh]" : ""
          }`}
        />
        <div className="pt-[95px] max-w-[1920px] w-full m-auto px-[32px]">
          <SearchInput set={setSearch} />
          <div className={`pt-[65px] text-[#fff] duration-[0.3s] ${search ? "hidden" : ""}`}>
            <h1 className="capitalize font-[500] text-[16px] pb-[24px] leading-[19px]">онцлох эвэнт</h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-[16px] gap-y-[40px]">
              {specialEventCarts.map((el, i) => {
                return <SpecialEventCart key={i} {...el} />;
              })}
            </div>
          </div>
          <div className={`pt-[70px] duration-[0.3s] ${search ? "mt-[60vh] hidden" : ""}`}>
            <h1 className="uppercase w-full text-[18px] leading-[21px] font-[400] text-[#D22366]">Таньд санал болгох</h1>
            <div className="flexcol pt-[40px] gap-[50px]">
              {bigEventCarts.map((el, i) => {
                return <BigEventCart key={i} {...el} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
