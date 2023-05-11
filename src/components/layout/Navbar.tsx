import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full h-[80px] fixed">
      <div className="h-full max-w-[1920px] w-full px-[60px] m-auto flex flex-row justify-between items-center text-[#fff]">
        {/* left logo */}
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          <h1 className="text-[24px] font-['Roboto']">UB EVENTS</h1>
        </button>
        {/* right profile avatar */}
        <button className="flex items-center gap-[10px] justify-center">
          <Image
            src="https://images.unsplash.com/photo-1682424609336-9f71d1df4f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80"
            width={40}
            height={40}
            alt="user avatar"
            className="rounded-[50%] w-[40px] h-[40px]"
          />
          <h2 className="font-['Inter'] font-normal pl-[5px]">Doljinsuren</h2>
          <Image src="/otherIcons/navbar-arrowDown.svg" width={30} height={30} alt="user avatar" className="w-[30px] h-[30px]" />
          <div className="flex flex-col mt-[200px] w-[245px] p-[20px] bg-black">
            {["Хадгалсан", "Тасалбар", "Календар", "Тохиргоо"].map((el, i) => {
              return (
                <div key={i} className="flex flex-row h-[45px] items-center px-[10px] justify-between">
                  <h2>{el}</h2>
                  <Image
                    src="/otherIcons/navbar-arrowDown.svg"
                    width={30}
                    height={30}
                    alt="user avatar"
                    className="w-[30px] h-[30px] rotate-[-90deg]"
                  />
                </div>
              );
            })}
          </div>
        </button>
      </div>
    </div>
  );
};
