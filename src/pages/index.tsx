import { EventCart } from "@/components/EventCart";
import { MoreCarts, cart, categories } from "@/utils";
import { log } from "console";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   console.log("working");
  //   if (router.pathname === "/") {
  //     router.push("/home");
  //   }
  //   return;
  // }, [router]);
  return (
    <main className="max-w-[1920px] m-auto px-[80px] bg-black">
      <div className="h-[80%] w-[24%] absolute z-[-1] bottom-0 right-0">
        <Image width={455} height={1180} alt="background image" src="/bgImages/back3.png" className={`w-full h-full object-cover duration-[0.5s] `} />
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center gap-[24px]">
        <button className="py-[20px] w-[280px] px-[77px] border-[1px] border-[#D22366] rounded-[50px]">
          <h2 className="font-['Roboto'] capitalize text-[#fff] text-[32px]">organizer</h2>
        </button>
        <button className="py-[20px] w-[280px] px-[77px] bg-[#D22366] rounded-[50px]">
          <h2 className="font-['Roboto'] capitalize text-[#fff] text-[32px]">login</h2>
        </button>
        <div className="w-[500px] h-[605px] bg-[#0A000B] rounded-[25px] flex flex-col justify-between items-center pt-[52px] pb-[95px] px-[55px]">
          <h4 className="text-[#fff] font-['Inter'] text-[24px] font-light">Sign in</h4>
          <input
            className={`text-[18px] w-full h-[60px] rounded-[25px] pl-[64px]  duration-[0.5s] text-[#fff]  bg-[#12121F] placeholder-[#686873] `}
            placeholder="email"
          />
          <input
            className={`text-[18px] w-full h-[60px] rounded-[25px] pl-[64px]  duration-[0.5s] text-[#fff]  bg-[#12121F] placeholder-[#686873] `}
            placeholder="password"
          />
          <button className="py-[20px] w-full h-[60px] px-[77px] bg-[#D22366] rounded-[50px]">
            <h2 className="font-['Roboto'] capitalize text-[#fff] text-[18px]">sign in</h2>
          </button>
          <button className="py-[20px] w-full h-[60px] px-[77px] border-[1px] border-[#D22366] rounded-[50px]">
            <h2 className="font-['Roboto'] capitalize text-[#fff] text-[18px]">sign up</h2>
          </button>
        </div>
        <div className="w-[500px] h-[750px] bg-[#0A000B] rounded-[25px] flex flex-col justify-between items-center pt-[52px] pb-[95px] px-[55px]">
          <h4 className="text-[#fff] font-['Inter'] text-[24px] font-light">Sign in</h4>
          <input
            className={`text-[18px] w-full h-[60px] rounded-[25px] pl-[64px]  duration-[0.5s] text-[#fff]  bg-[#12121F] placeholder-[#686873] `}
            placeholder="username"
          />
          <input
            className={`text-[18px] w-full h-[60px] rounded-[25px] pl-[64px]  duration-[0.5s] text-[#fff]  bg-[#12121F] placeholder-[#686873] `}
            placeholder="email"
          />
          <input
            className={`text-[18px] w-full h-[60px] rounded-[25px] pl-[64px]  duration-[0.5s] text-[#fff]  bg-[#12121F] placeholder-[#686873] `}
            placeholder="password"
          />
          <input
            className={`text-[18px] w-full h-[60px] rounded-[25px] pl-[64px]  duration-[0.5s] text-[#fff]  bg-[#12121F] placeholder-[#686873] `}
            placeholder="password"
          />
          <button className="py-[20px] w-full h-[60px] px-[77px] bg-[#D22366] rounded-[50px]">
            <h2 className="font-['Roboto'] capitalize text-[#fff] text-[18px]">sign in</h2>
          </button>
          <button className="py-[20px] w-full h-[60px] px-[77px] border-[1px] border-[#D22366] rounded-[50px]">
            <h2 className="font-['Roboto'] capitalize text-[#fff] text-[18px]">sign up</h2>
          </button>
        </div>
      </div>
    </main>
  );
}
