import React from "react";
import HeaderComponents from "./Header.components";
import FooterComponents from "./Footer.components";
import { Outlet } from "react-router-dom";
import ContainerComponents from "./Container.components";

const MainComponents = () => {
  return (
    <ContainerComponents className="">
      <HeaderComponents />
      <Outlet />
      <FooterComponents />
    </ContainerComponents>
  );
};

export default MainComponents;
