import { BigEventCart, Login, SearchInput, Special, SpecialEventCart } from "@/components";
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
        <div className="pt-[95px] max-w-[1920px] w-full m-auto px-[32px] lg:p-[130px_45px_0] 2xl:p-[130px_60px_0]">
          <SearchInput set={setSearch} />
          <Special />
          <div className={`pt-[70px] duration-[0.3s] lg:pt-[100px] ${search ? "mt-[60vh] hidden" : ""}`}>
            <h1 className="uppercase w-full text-[18px] leading-[21px] font-[400] text-[#D22366] md:text-[20px] md:leading-[23px] lg:text-[24px] lg:leading-[29px]">
              Таньд санал болгох
            </h1>
            <div className="flexcol pt-[40px] gap-[50px] lg:pt-[60px]">
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
