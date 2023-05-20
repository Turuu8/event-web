import { SIGN_IN } from "@/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { validate } from "graphql";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const Auth = createContext<any>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState({ email: "", username: "", password: "" });
  const [isUser, setIsUser] = useState(false);
  const [loginButton, setLoginButton] = useState(false);

  const [sigin, { data, loading, error }] = useMutation(SIGN_IN);

  // const login = async (email: string, password: string) => {
  //   try {
  //     await sigin({
  //       variables: {
  //         email,
  //         password,
  //       },
  //       onCompleted: (data) => {
  //         const res = data?.signin;
  //         setToken(res.token);
  //         localStorage.setItem("token", res.token);
  //         setIsUser(true);
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // async function checkAuth() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsUser(true);
  //     setToken(token as string);
  //   } else {
  //     setIsUser(false);
  //   }
  // }
  // useEffect(() => {
  //   checkAuth();
  // }, [isUser]);

  const state = {
    userLogin: { isUser, setIsUser },
    clickButton: { loginButton, setLoginButton },
  };
  return <Auth.Provider value={state}>{children}</Auth.Provider>;
};

export const useAuthContext = () => useContext(Auth);
