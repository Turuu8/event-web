import { useAuthContext, useChangesNavbarSearch } from "@/context";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Login } from "../login/Login";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/graphql";

interface ChangeTypes {
  show: boolean;
  navbar: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
  setShow: Dispatch<SetStateAction<boolean>>;
  setNavbar: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const { show, navbar, setSearch, setShow, setNavbar } = useChangesNavbarSearch() as ChangeTypes;
  const { userLogin, clickButton } = useAuthContext();
  const { isUser } = userLogin;
  const { setLoginButton } = clickButton;

  // const { token } = useAuthContext();
  // const { data } = useQuery(GET_USER, {
  //   context: {
  //     headers: {
  //       authorization:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YXJpYW50IjoidXNlciIsImlkIjoiNjQ2NzJhYTI4ZDAwYjlhZWZiYWMyOTJjIiwiaWF0IjoxNjg0NDg3MTMwLCJleHAiOjE2ODQ0ODcxNDB9.Fwqn0iCOqIwmyQug2_TF_hXPQtsCgH_2J37ZcDFGnaI",
  //     },
  //   },
  // });
  // const { login } = useAuthContext();
  // useEffect(() => {
  //   (async () => {
  //     await login("t@gmial.com", "12345678");
  //   })();
  // }, []);

  const router = useRouter();

  return (
    <>
      <header
        className={`w-full flexrow justify-between items-center px-[32px] h-[70px] fixed top-0 z-10 duration-[0.3s] ${navbar && "bg-[#0A000B]"}`}
      >
        <button onClick={() => router.push("/")} className="uppercase font-['Roboto'] font-[600]">
          <h1>UB EVENTS</h1>
        </button>
        {/* hamburger */}
        <button
          onClick={() => {
            setDropDown(true);
            setNavbar(true);
          }}
        >
          <Image alt="hamburger menu icon" width={30} height={30} src="/otherIcons/hamburgerMenu.svg" className="w-[30px] h-[30px]" />
        </button>
      </header>
      <div
        className={`fixed z-10 w-[100vw] h-[100vh] duration-[0.5s] translate-y-[-100%] px-[32px] bg-[#0A000B] ${dropDown && "translate-y-[0px] "}`}
      >
        {/* ___________ close navbar ___________*/}
        <div className="h-[70px] flex justify-end w-full items-center">
          <button
            className="flex items-center gap-[10px] justify-center"
            onClick={() => {
              setDropDown(false);
              setNavbar(false);
            }}
          >
            <Image
              src="/otherIcons/close.svg"
              width={40}
              height={40}
              alt="user avatar"
              className="rounded-[50%] w-[40px] h-[40px] max-[1600px]:w-[30px] max-[1600px]:h-[30px]"
            />
          </button>
        </div>
        {/* ___________ name and profile image ___________*/}
        {isUser ? (
          <>
            <div className="flexrow gap-[16px] items-center">
              <div className="w-[35px] h-[35px]">
                <Image
                  alt="profile imgage"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-[50%]"
                  src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2334&q=80"
                />
              </div>
              <h2 className="font-['Inter'] font-[300] text-[18px] leading-[21px]">Doljinsuren</h2>
            </div>
            {/* ___________ other buttoms ___________*/}
            <div className="flexcol pt-[55px] gap-[16px]">
              {["Хадгалсан", "Тасалбар", "Календар", "Тохиргоо", "Эвэнт үүсгэх"].map((el, i) => {
                return (
                  <div key={i}>
                    <button className={``} onClick={() => console.log(el)}>
                      <h2 className="text-[18px] leading-[21px]">{el}</h2>
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <button
            onClick={() => {
              setDropDown(false);
              setLoginButton(() => true);
            }}
          >
            <h1>Нэвтрэх</h1>
          </button>
        )}
      </div>
    </>
  );
};

// export const Navbar = () => {
//   const [dropDown, setDropDown] = useState(false);
//   const { show, navbar, setSearch, setShow, setNavbar } = useChangesNavbarSearch() as ChangeTypes;

//   const router = useRouter();

//   return (
//     <div
//       className={`w-full h-[80px] fixed duration-[0.3s] z-10  max-[1600px]:h-[60px] ${show ? "top-[-80px] max-[1600px]:top-[-60px]" : "top-0 "} ${
//         navbar && "bg-[#0A000B]"
//       }`}
//     >
//       <div
//         className="h-full max-w-[1920px] w-full px-[60px] m-auto flexrow justify-between items-center text-[#fff] relative
//        max-[1600px]:px-[45px] max-[600px]:px-[30px]"
//       >
//         {/* left logo */}
//         <button
//           onClick={() => {
//             setSearch(false);
//             router.push("/");
//           }}
//         >
//           <h1 className="text-[24px] font-['Roboto'] max-[1600px]:text-[18px]">UB EVENTS</h1>
//         </button>
//         {/* __________________ right menu section __________________ */}
//         <button
//           className="flex items-center gap-[10px] justify-center max-[1600px]:gap-[5px] max-[600px]:hidden"
//           onClick={() => setDropDown((p) => !p)}
//         >
//           <Image
//             src="https://images.unsplash.com/photo-1682424609336-9f71d1df4f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80"
//             width={40}
//             height={40}
//             alt="user avatar"
//             className="rounded-[50%] w-[40px] h-[40px] max-[1600px]:w-[30px] max-[1600px]:h-[30px]"
//           />
//           <h2 className="font-['Inter'] font-normal pl-[5px] text-[18px] max-[1600px]:text-[14px]">Doljinsuren</h2>
//           <Image
//             src="/otherIcons/navbar-arrowDown.svg"
//             width={30}
//             height={30}
//             alt="user avatar"
//             className={`w-[30px] h-[30px] duration-[0.3s] ${dropDown ? "rotate-[-180deg]" : "rotate-0"}
//             max-[1600px]:w-[20px] max-[1600px]:h-[20px]
//             `}
//           />
//         </button>
//         {/* hamburger menu */}
//         <button className="min-[601px]:hidden">
//           <Image alt="hamburger menu icon" width={30} height={30} src="/otherIcons/hamburgerMenu.svg" className="w-[30px] h-[30px]" />
//         </button>
//         <div
//           className={`flexcol w-[245px] p-[20px]  absolute right-[25px] duration-[0.3s] z-[-1] rounded-[8px] box-border
//           ${navbar && "bg-[#0A000B]"} ${dropDown ? "top-[60px] opacity-100" : "top-[0] opacity-0"} `}
//         >
//           {["Хадгалсан", "Тасалбар", "Календар", "Тохиргоо"].map((el, i) => {
//             return (
//               <div key={i} className={`flexrow h-[45px] items-center px-[10px] justify-between `}>
//                 <h2>{el}</h2>
//                 <Image
//                   src="/otherIcons/navbar-arrowDown.svg"
//                   width={30}
//                   height={30}
//                   alt="user avatar"
//                   className="w-[30px] h-[30px] rotate-[-90deg]"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
