import React from "react";
import FooterComponents from "./Footer.components";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HeaderNav from "./HeaderNav.components";

const MainComponents = () => {
  return (
    <>
      <HeaderNav />
      <Outlet />
      <FooterComponents />
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
};

export default MainComponents;
