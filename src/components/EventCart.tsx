import { EVENT_TYPE } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export const SpecialEventCart = (props: EVENT_TYPE) => {
  const router = useRouter();

  return (
    <button className="flexcol  text-center " onClick={() => router.push(`/event/${props.id}`)}>
      <div className="relative w-full h-[190px] min-[500px]:h-[260px]">
        <Image width={1000} height={1000} alt="special events" priority src={props.img} className="w-full h-full rounded-[8px]" />
        <div className="flexcol justify-center text-center absolute right-[12px] top-[12px] gap-[2px] rounded-[8px] py-[3px] px-[10px] bg-[#fff]">
          <h3 className="text-[10px] leading-[12px] font-[400] text-[#000]">{props.mount}</h3>
          <h2 className="text-[16px] leading-[19px] font-[400] text-[#000]">{props.day}</h2>
        </div>
      </div>
      <p className="w-full capitalize text-[12px] leading-[14px] pt-[12px] text-[#C7C9CF]">{props.location}</p>
      <h3 className="w-full text-[14px] leading-[16px] pt-[6px] ">{props.title}</h3>
    </button>
  );
};

export const BigEventCart = (props: EVENT_TYPE) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeNumber, setLikeNumber] = useState<number>(25);
  const router = useRouter();
  return (
    <div className="flexcol font-[300] text-[#fff] gap-[24px] ">
      <div className="relative w-full h-[350px] min-[500px]:h-[470px]">
        <Image
          width={1000}
          height={1000}
          alt="special events"
          src={props.img}
          className="w-full h-full rounded-[8px] cursor-pointer"
          onClick={() => router.push(`/event/${props.id}`)}
        />
        <div className="flexcol justify-center text-center absolute right-[20px] top-[20px] gap-[2px] rounded-[8px] py-[3px] px-[10px] bg-[#fff]">
          <h3 className="text-[10px] leading-[12px] font-[400] text-[#000]">{props.mount}</h3>
          <h2 className="text-[16px] leading-[19px] font-[400] text-[#000]">{props.day}</h2>
        </div>
      </div>
      <div className="flexcol gap-[8px]">
        <button onClick={() => router.push(`/event/${props.id}`)}>
          <h1 className="text-[18px] leading-[21px] font-[400] text-start underline underline-offset-[4px] ">{props.title}</h1>
        </button>
        <p className="capitalize text-[14px] leading-[16px] text-[#C7C9CF]">{props.location}</p>
        <div className="flex items-center">
          <button
            className="h-[17px] ml-[-5px] flex items-center justify-center"
            onClick={() => {
              setLiked((p) => !p);
              setLikeNumber((p) => p + 1);
            }}
          >
            <Image
              alt="save icon"
              width={40}
              height={40}
              src={liked ? "/otherIcons/favorited.svg" : "/otherIcons/favorite.svg"}
              className="w-[25px] h-[25px] "
            />
          </button>
          <p className="text-[14px] leading-[16px] font-[300]">{likeNumber}</p>
        </div>
        {/* view event buttom */}
        <div>
          <button
            className="flexrow items-center rounded-[8px] gap-x-[10px] px-[20px] py-[10px] bg-[#12121F]"
            onClick={() => router.push(`/event/${props.id}`)}
          >
            <span className="capitalize text-[12px] leading-[14px] text-[#686873]">Эвэнтийн дэлгэрэнгүй</span>
            <Image
              width={30}
              height={30}
              alt="arrow right icon"
              src="/otherIcons/detail-arrowRight-line.svg"
              className="w-[20px] h-[20px]  opacity-30"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
