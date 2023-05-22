import { useAuthContext, useChangesNavbarSearch } from "@/context";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export const Login = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { clickButton, sign } = useAuthContext();
  const { setLoginButton } = clickButton;
  const { signIn, signUp } = sign;
  const { setNavbar } = useChangesNavbarSearch() as { setNavbar: Dispatch<SetStateAction<boolean>> };

  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (register) {
      await signUp(email, firstName, lastName, password);
      setNavbar(false);
    } else {
      await signIn(email, password);
      setNavbar(false);
    }
  };
  return (
    <>
      <div
        onClick={() => {
          setLoginButton(false);
        }}
        className="fixed z-20 w-full h-[100vh] bg-[#0A000B] px-[32px] flex items-center justify-center sm:bg-[#0a000b94]"
      ></div>
      <div className="flexcol justify-center w-full h-full px-[32px] fixed right-0 top-0 left-0 bottom-0 m-auto z-30 sm:bg-[#0A000B] sm:w-[500px] sm:py-[85px] sm:px-[55px] sm:rounded-[8px] sm:h-[645px]">
        <div className="h-[70px] flex justify-end w-full items-center">
          {/* close icon */}
          <button
            className="flex items-center gap-[10px] justify-center md:hidden"
            onClick={() => {
              setLoginButton(false);
            }}
          >
            <Image src="/otherIcons/close.svg" width={40} height={40} alt="close icon" className="rounded-[50%] w-[30px] h-[30px]" />
          </button>
        </div>
        <h1 className="text-center text-[20px] leading-[24px] mb-[40px]">{register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
        <form onSubmit={handleSumbit}>
          <div className="w-full h-[60px] mb-[24px] relative">
            <input
              placeholder="И-мэйл"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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
            <>
              <div className="w-full h-[60px] mb-[24px] relative">
                <input
                  placeholder="Нэр"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
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
              <div className="w-full h-[60px] mb-[24px] relative">
                <input
                  placeholder="last name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
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
            </>
          )}
          <div className="w-full h-[60px] mb-[8px] relative">
            <input
              placeholder="Нууц үг"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
            <button className={`w-full h-[60px] rounded-[8px] mb-[24px] bg-[#D22366]`} type="submit">
              <h1>{register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
            </button>
            <button onClick={() => setRegister((p) => !p)} className={`w-full h-[60px] rounded-[8px] border-[0.5px] border-[#fff]`}>
              <h1>{!register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
