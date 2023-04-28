import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex justify-center bg-[#fff]">
      <div className="h-full max-w-[1920px] w-full px-[60px] flex flex-row justify-between items-center">
        <h1 className="text-[18px] font-['Poppins'] font-medium">UB Events</h1>
        <div className="flex flex-row gap-[100px]">
          <div className="flex gap-[24px] items-center">
            {["Home", "Favorites", "Calendar"].map((el, i) => {
              return (
                <button key={i} onClick={() => console.log(el)} className="h-[30px]">
                  <h2 className="text-[18px] font-['Poppins'] font-normal">{el}</h2>
                </button>
              );
            })}
          </div>
          <div className="w-[300px] h-[70px] flex justify-between items-center">
            <div className="pl-[30px]">
              <Image
                src="https://images.unsplash.com/photo-1682424609336-9f71d1df4f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80"
                width={50}
                height={50}
                alt="user avatar"
                className="rounded-[50%] max-h-[50px] max-w-[50px] min-h-[50px] min-w-[50px]"
              />
            </div>
            {/* user email */}
            <h2 className="text-[18px] font-['Poppins'] font-normal pl-[10px]">surnee@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
