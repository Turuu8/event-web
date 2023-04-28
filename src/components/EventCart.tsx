import Image from "next/image";
import React, { useState } from "react";

export const EventCart = (props: { title: string; location: string; date: string; img: string }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="w-[360px] h-[250px] relative rounded-[25px]">
      <Image width={360} height={250} src={props.img} alt="cart image" className="h-full w-full object-cover rounded-[25px]" />
      {/* Date */}
      <div className="w-[100px] h-[40px] bg-[#FFFFFF80] absolute top-[16px] left-[25px] rounded-[25px] text-[#fff] flex items-center justify-between pr-[10px] pl-[9px]">
        <Image
          width={30}
          height={30}
          alt="calendar icon"
          className="max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px]"
          src="/otherIcons/calendar.svg"
        />
        <p className="text-[10px]">{props.date}</p>
      </div>
      {/* Favorite */}
      <button
        className="w-[40px] h-[40px] rounded-[50%] bg-[#FFFFFF80] absolute top-[16px] right-[25px] flex justify-center items-center "
        onClick={() => {
          setFavorite(() => !favorite);
        }}
      >
        <Image
          width={30}
          height={30}
          alt="favorite icon"
          className="max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] duration-[1s]"
          src={favorite ? "/otherIcons/fillFavorite.svg" : "/otherIcons/favorite.svg"}
        />
      </button>
      {/* Title */}
      <div className="absolute left-[25px] bottom-[35px]">
        <h1 className="text-[14px] font-['Poppins'] font-medium text-[#fff]">{props.title}</h1>
      </div>
      {/* Location */}
      <div className="absolute left-[25px] bottom-[19px]">
        <p className="text-[10px] font-normal text-[#C7C9CF]">{props.location}</p>
      </div>
    </div>
  );
};
