import { EventCart } from "@/components/EventCart";
import { MoreCarts, cart, categories } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1728px] m-auto px-[60px]">
      <section className=" bg-[#fff] pt-[30px]">
        {/* Search */}
        <div className="flex gap-[30px]">
          <div className="w-[550px] h-[60px] relative">
            <input className="text-[16px] w-full h-full bg-[#F7F7F7] rounded-[25px] pl-[50px] " placeholder="Search" />
            <Image
              width={30}
              height={30}
              alt="search icon"
              className="max-w-[30px] max-h-[30px] min-w-[30px] min-h-[30px] absolute top-0 bottom-0 left-[15px] m-auto"
              src="/otherIcons/search.svg"
            />
          </div>
          <div className="w-[250px] h-[60px] relative">
            <input className="text-[16px] w-full h-full bg-[#F7F7F7] rounded-[25px] pl-[50px]" placeholder="Any location" />
            <Image
              width={30}
              height={30}
              alt="search icon"
              className="max-w-[30px] max-h-[30px] min-w-[30px] min-h-[30px] absolute top-0 bottom-0 left-[15px] m-auto"
              src="/otherIcons/search.svg"
            />
          </div>
          <button className="w-[200px] h-[60px] rounded-[25px] bg-[#D22366] font-medium text-[#fff] text-[16px] ">Find Event</button>
        </div>
      </section>
      <section className=" bg-[#fff] pt-[100px]">
        {/* Categories */}
        <h3 className="text-[24px] font-medium pb-[30px]">Check out with categories</h3>
        <div className="flex flex-row gap-[10px]">
          {categories.map((el, i) => {
            return (
              <button
                className="flex flex-row items-center justify-center  h-[35px] bg-[#F7F7F7] rounded-[50px] pl-[8px] pr-[12px] gap-[5px]"
                key={i}
                onClick={() => console.log(el.title)}
              >
                <Image src={el.svg} width={30} height={30} alt="categor icon" className="max-w-[30px] max-h-[30px] min-w-[30px] min-h-[30px]" />
                <h3 className="text-[12px] text-[#444444] font-normal">{el.title}</h3>
              </button>
            );
          })}
        </div>
        <div className="flex gap-[55px] p-[75px_0_80px]">
          {cart.map((el, i) => {
            return <EventCart key={i} {...el} />;
          })}
        </div>
        {/* More events  */}
        <h3 className="text-[24px] pb-[30px] font-medium">More events</h3>
        <div className="grid grid-cols-[360px_360px_360px_360px] gap-[55px] ">
          {MoreCarts.map((el, i) => {
            return <EventCart key={i} {...el} />;
          })}
        </div>
      </section>
    </main>
  );
}
