import React from "react";
import HeaderComponents from "./Header.components";
import FooterComponents from "./Footer.components";
import { Outlet } from "react-router-dom";
import ContainerComponents from "./Container.components";

const MainComponents = () => {
  return (
    <div className="bg-slate-900">
      <ContainerComponents className="flex flex-col p-5 h-auto w-auto">
        <HeaderComponents />
        <Outlet />
        <FooterComponents />
      </ContainerComponents>
    </div>
  );
};

export default MainComponents;
