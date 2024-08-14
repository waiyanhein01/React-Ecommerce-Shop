import React from "react";
import HeaderComponents from "./Header.components";
import FooterComponents from "./Footer.components";
import { Outlet } from "react-router-dom";

const MainComponents = () => {
  return (
      <>
      <HeaderComponents />
      <Outlet />
      <FooterComponents />
      </>
  );
};

export default MainComponents;
