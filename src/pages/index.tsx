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
          <div className={`pt-[100px] text-[#fff] max-[1600px]:pt-[65px] duration-[0.3s] ${search ? "hidden" : ""}`}>
            <h1 className="font-[400] text-[24px] pb-[60px] capitalize max-[1600px]:text-[18px] max-[1600px]:pb-[35px]">онцлох эвэнт</h1>
            <div className="grid grid-cols-4 grid-rows-1 gap-[24px] max-[1600px]:gap-[16px]">
              {specialEventCarts.map((el, i) => {
                return <SpecialEventCart key={i} {...el} />;
              })}
            </div>
          </div>
          <div id="comming" className={`pt-[125px] max-[1600px]:pt-[85px] duration-[0.3s] ${search ? "mt-[60vh] hidden" : ""}`}>
            <a href="#comming">
              <h1 className="uppercase text-[#D22366] font-[300] text-[32px] w-full max-[1600px]:text-[24px]">Таньд санал болгох</h1>
            </a>
            <div className="flexcol pt-[80px] gap-[80px] max-[1600px]:pt-[40px]  max-[1600px]:gap-[60px]">
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
