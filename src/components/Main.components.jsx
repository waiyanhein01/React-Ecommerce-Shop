import React from "react";
import HeaderComponents from "./Header.components";
import FooterComponents from "./Footer.components";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainComponents = () => {
  return (
    <>
      <HeaderComponents />
      <Outlet />
      <FooterComponents />
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "13px"
          },
        }}
      />
    </>
  );
};

export default MainComponents;
