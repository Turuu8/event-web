import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [current, setCurrent] = useState<Number | null>(0);
  const router = useRouter();
  console.log(current);

  useEffect(() => {
    (() => {
      switch (router.pathname) {
        case "/":
          return setCurrent(4);
        case "/home":
          return setCurrent(0);
        case "/favorites":
          return setCurrent(1);
        case "/events":
          return setCurrent(2);
        case "/profile":
          return setCurrent(3);
        default:
          return setCurrent(null);
      }
    })();
  }, [router.pathname]);

  return (
    <div className="w-full h-[130px] bg-transparent fixed z-10">
      <div className="h-full max-w-[1920px] w-full px-[60px] m-auto flex flex-row justify-between items-center">
        <button
          onClick={() => {
            setCurrent(4);
            router.push("/");
          }}
        >
          <h1 className="text-[30px] font-['Poppins'] font-normal text-[#fff]">UB Events</h1>
        </button>
        <div className="flex gap-[32px] items-center">
          {["home", "favorites", "events"].map((el, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  router.push(`/${el}`);
                }}
                className="h-[30px]"
              >
                <h2 className={`text-[24px] font-['Poppins'] font-light ${current === i ? "text-[#D22366]" : "text-[#fff]"} capitalize`}>{el}</h2>
              </button>
            );
          })}
        </div>
        <div className={`w-[120px] h-[65px] flex justify-between items-center rounded-[35px] ${current === 3 ? "bg-[#D22366]" : "bg-[#12121F]"}`}>
          <button
            className="pl-[8px] pr-[25px] flex justify-between w-full"
            onClick={() => {
              router.push("/profile");
              setCurrent(3);
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1682424609336-9f71d1df4f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80"
              width={50}
              height={50}
              alt="user avatar"
              className="rounded-[50%] max-h-[50px] max-w-[50px] min-h-[50px] min-w-[50px]"
            />

            <Image
              src="/otherIcons/arrowDown.svg"
              width="0"
              height="0"
              alt="user avatar"
              priority={true}
              className="max-h-[50px] max-w-[15px] min-h-[50px] min-w-[15px] h-auto w-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
