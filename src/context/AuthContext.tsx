import { SIGN_IN, SIGN_UP } from "@/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const Auth = createContext<any>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<object | null>(null);
  const [isUser, setIsUser] = useState(false);
  const [loginButton, setLoginButton] = useState(false);

  const [signinGQL, { data, loading, error }] = useMutation(SIGN_IN);
  const [signupGQL] = useMutation(SIGN_UP);

  const signIn = async (email: string, password: string) => {
    try {
      await signinGQL({
        variables: {
          email,
          password,
        },
        onCompleted: (data) => {
          if (data) {
            const res = data.signin;
            localStorage.setItem("token", res.token);
            setToken(res.token);
            setLoginButton(false);
            setIsUser(true);
            setUserInfo(data.signin.user);
          }
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (email: string, firstName: string, lastName: string, password: string) => {
    try {
      await signupGQL({
        variables: {
          email,
          firstName,
          lastName,
          password,
        },
        onCompleted: (data) => {
          if (data) {
            const res = data.signup;
            localStorage.setItem("token", res.token);
            console.log("success", res);
          }
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
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
    sign: { signIn, signUp },
    data: { userInfo, setUserInfo },
  };
  return <Auth.Provider value={state}>{children}</Auth.Provider>;
};

export const useAuthContext = () => useContext(Auth);
