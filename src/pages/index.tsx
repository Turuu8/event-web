import { BigEventCart, SpecialEventCart } from "@/components/EventCart";
import { bigEventCarts, specialEventCarts } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full font-['Inter'] relative">
      <div className="bg-[url('/images/homeBack.jpeg')] bg-no-repeat bg-cover w-full h-[115vh] z-[-1] absolute"></div>
      <div className="pt-[165px] max-w-[1920px] w-full m-auto px-[60px] max-[1600px]:px-[45px] max-[1600px]:pt-[125px]">
        <SearchInput />
        <div className="pt-[80px] text-[#fff] max-[1600px]:pt-[55px]">
          <h1 className="font-[400] text-[24px] pb-[80px] capitalize max-[1600px]:text-[18px] max-[1600px]:pb-[55px]">онцлох эвэнт</h1>
          {/* <div className="flex flex-row gap-[24px] max-[1600px]:gap-[18px]"> */}
          <div className="grid grid-cols-4 grid-rows-1 gap-[24px] max-[1600px]:gap-[16px]">
            {specialEventCarts.map((el, i) => {
              return <SpecialEventCart key={i} {...el} />;
            })}
          </div>
        </div>
        <div id="comming" className="pt-[125px] max-[1600px]:pt-[85px]">
          <a href="#comming">
            <h1 className="capitalize text-[#D22366] font-[400] text-[32px] w-full text-center max-[1600px]:text-[24px]">
              {/* удахгүй болох эвэнт */}
              UPCOMMING EVENTS
            </h1>
          </a>
          <div className="flex flex-col pt-[125px] gap-[80px] max-[1600px]:pt-[90px]  max-[1600px]:gap-[60px]">
            {bigEventCarts.map((el, i) => {
              return <BigEventCart key={i} {...el} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

const SearchInput = () => {
  return (
    <div className="w-full relative">
      <input
        type="search"
        placeholder="Хайх"
        className="border-[0.5px] border-[#C7C9CF] rounded-[8px] w-full bg-transparent h-[60px] text-[#fff] placeholder-[#C7C9CF] px-[50px] text-[18px] focus:outline-none
      max-[1600px]:h-[45px] max-[1600px]:border-[0.01px] max-[1600px]:text-[14px] max-[1600px]:px-[40px]
      "
      />
      <Image
        width={30}
        height={30}
        src="/otherIcons/search.svg"
        className="absolute top-0 bottom-0 m-auto left-[10px] max-[1600px]:left-[8px] max-[1600px]:w-[25px] max-[1600px]:h-[25px]"
        alt="search icon"
      />
    </div>
  );
};
