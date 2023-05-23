import { BigEventCart, SearchInput, Special } from "@/components";
import useEvents from "@/components/hook/useEvents";
import { useAuthContext } from "@/context";
import { GET_EVENTS } from "@/graphql";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Loginbtn = dynamic(() => import("../components/login/Login").then((module) => module.Login));

export default function Home() {
  const [search, setSearch] = useState(false);
  // const { events } = useEvents();
  const { data, loading } = useQuery(GET_EVENTS);
  const { clickButton } = useAuthContext();
  const { loginButton } = clickButton;

  console.log("hello");

  return (
    <>
      {loginButton && <Loginbtn />}
      <main className={`w-full font-['Inter'] relative duration-[0.3s]  ${search ? "bg-[#0A000B]" : ""}`}>
        <div
          className={`bg-[url('/images/homeBack.jpeg')] bg-no-repeat bg-cover w-full h-[115vh] z-[-1] absolute duration-[0.5s] ${
            search ? "opacity-0 h-[100vh]" : ""
          }`}
        />
        <div className="pt-[95px] max-w-[1920px] w-full m-auto px-[32px] lg:p-[130px_45px_0] 2xl:p-[165px_60px_0]">
          <SearchInput set={setSearch} search={search} />
          <Special search={search} />
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
