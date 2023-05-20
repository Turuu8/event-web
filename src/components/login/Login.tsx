import { useAuthContext } from "@/context";
import Image from "next/image";
import { useState } from "react";

export const Login = () => {
  const [register, setRegister] = useState(false);
  const { clickButton } = useAuthContext();
  const { setLoginButton } = clickButton;
  return (
    <>
      <div
        onClick={() => {
          setLoginButton(false);
        }}
        className="fixed z-20 w-full h-[100vh] bg-[#0A000B] px-[32px] flex items-center justify-center sm:bg-transparent"
      ></div>
      <div className="flexcol justify-center w-full h-full px-[32px] fixed right-0 top-0 left-0 bottom-0 m-auto z-30 sm:bg-[#0A000B] sm:w-[500px] sm:py-[85px] sm:px-[55px] sm:rounded-[8px] sm:h-[645px]">
        <h1 className="text-center text-[20px] leading-[24px] mb-[40px]">{register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
        <div className="w-full h-[60px] mb-[24px] relative">
          <input
            placeholder="И-мэйл"
            className="w-full h-full bg-[#12121F] rounded-[8px] pl-[64px] text-[#fff] text-[16px] leading-[19px] font-['Inter'] font-[300]"
          />
          <Image
            alt="Input icon"
            width={40}
            height={40}
            className="w-[30px] h-[30px] absolute top-[15px] left-[24px] opacity-60"
            src="/otherIcons/email.svg"
          />
        </div>
        {register && (
          <div className="w-full h-[60px] mb-[24px] relative">
            <input
              placeholder="Нэр"
              className="w-full h-full bg-[#12121F] rounded-[8px] pl-[64px] text-[#fff] text-[16px] leading-[19px] font-['Inter'] font-[300]"
            />
            <Image
              alt="Input icon"
              width={40}
              height={40}
              className="w-[30px] h-[30px] absolute top-[15px] left-[24px] opacity-60"
              src="/otherIcons/userName.svg"
            />
          </div>
        )}
        <div className="w-full h-[60px] mb-[8px] relative">
          <input
            placeholder="Нууц үг"
            className="w-full h-full  bg-[#12121F] rounded-[8px] pl-[64px] text-[#fff] text-[16px] leading-[19px] font-['Inter'] font-[300]"
          />
          <Image
            alt="Input icon"
            width={40}
            height={40}
            className="w-[30px] h-[30px] absolute top-[15px] left-[24px] opacity-60"
            src="/otherIcons/password.svg"
          />
        </div>
        <div className="text-end pb-[40px]">
          <button>
            <span className="text-[#686873] text-[14px] leading-[16px] ">Кодоо мартсан уу?</span>
          </button>
        </div>
        <div>
          <button className={`w-full h-[60px] rounded-[8px] mb-[24px] bg-[#D22366]`}>
            <h1>{register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
          </button>
          <button onClick={() => setRegister((p) => !p)} className={`w-full h-[60px] rounded-[8px] border-[0.5px] border-[#fff]`}>
            <h1>{!register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
          </button>
        </div>
      </div>
    </>
  );
};
