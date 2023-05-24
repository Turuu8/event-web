import { BigEventCart, SearchInput, Special } from "@/components";
import { useAuthContext, useLoading } from "@/context";
import { GET_EVENTS } from "@/graphql";
import { DETAIL_TYPE } from "@/types";
import { StartDateFun } from "@/utils/date";
import { LoadingFun } from "@/utils/loading";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Login = dynamic(() => import("../components/login/Login").then((module) => module.Login));

export default function Home() {
  const { search, setSearch } = useLoading() as {
    search: boolean;
    setSearch: Dispatch<SetStateAction<boolean>>;
  };
  const start = Date.now();
  const test = new Date(start).toISOString().slice(0, 10).split("-")[1];

  // const specialData: string[] = [];
  const { data, loading } = useQuery(GET_EVENTS) as { data: { events: DETAIL_TYPE }; loading: any };
  const { clickButton } = useAuthContext();
  const { loginButton } = clickButton;

  LoadingFun(loading);

  if (data) {
    // const specialData = data.events?.filter((el) => StartDateFun(el.startDate)[1] === test);
    // const dateTest = [];
    // console.log(specialData.startDate);
    // specialData.map((el, i) => {
    //   dateTest.push(StartDateFun(el.startDate)[2]);
    // });
    // const result = StartDateFun(specialData.startDate)[2].reduce((a, b) => Math.min(a, b));
    // console.log(result);
  }
  // specialData.push({ mount: StartDateFun(el.startDate)[1], day: StartDateFun(el.startDate)[2] });

  return (
    <>
      {loginButton && <Login />}
      <main className={`w-full font-['Inter'] relative duration-[0.3s]  ${search ? "bg-[#0A000B]" : ""}`}>
        <div
          className={`bg-[url('/images/homeBack.jpeg')] bg-no-repeat bg-cover w-full h-[115vh] z-[-1] absolute duration-[0.5s] ${
            search ? "opacity-0 h-[100vh]" : ""
          }`}
        />
        <div className="pt-[95px] max-w-[1920px] w-full m-auto px-[32px] lg:p-[130px_45px_0] 2xl:p-[165px_60px_0]">
          <SearchInput set={setSearch} search={search} />
          <Special search={search} data={data?.events} />
          <div className={`pt-[70px] duration-[0.3s] lg:pt-[100px] 2xl:pt-[130px] ${search ? "hidden" : ""}`}>
            <h1 className="uppercase w-full text-[18px] leading-[21px] font-[400] text-[#D22366] md:text-[20px] md:leading-[23px] lg:text-[24px] lg:leading-[29px] 2xl:text-[32px] 2xl:leading-[38px]">
              Таньд санал болгох
            </h1>
            <div className="flexcol pt-[40px] gap-[50px] lg:pt-[60px] xl:gap-[60px] 2xl:pt-[75px] 2xl:gap-[80px]">
              {data?.events?.map((el: any) => {
                return <BigEventCart key={el.id} {...el} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
