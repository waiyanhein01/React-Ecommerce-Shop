import React from "react";
import ContainerComponents from "./Container.components";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  return (
    <ContainerComponents>
      <div className=" flex justify-between">
        <Link to={"/"} className=" lg:text-3xl text-2xl font-bold text-neutral-50">
          Online Shop
        </Link>
        <Link to={"/my-cart"} className=" border border-neutral-50 rounded-md py-1 px-4 relative">
          <span className=" text-neutral-50 text-xs">My Cart</span>
          <span className=" bg-red-600 px-2 text-xs translate-x-2 -translate-y-3 rounded-md absolute text-white">
            1
          </span>
        </Link>
      </div>
    </ContainerComponents>
  );
};

export default HeaderComponents;
