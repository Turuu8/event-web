import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { NavbarSearch } from "@/context/NavbarSearch";
import { AuthContextProvider } from "@/context/AuthContext";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContextProvider>
      <NavbarSearch>
        <Navbar />
        {children}
        <Footer />
      </NavbarSearch>
    </AuthContextProvider>
  );
};
