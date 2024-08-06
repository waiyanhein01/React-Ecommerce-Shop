import React from "react";
import ContainerComponents from "./Container.components";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const HeaderComponents = () => {
  return (
    <div className=" bg-color-black p-5">
       <ContainerComponents className={"flex justify-between items-center"}>
       <Link to={"/"} className=" lg:text-3xl text-2xl font-bold text-neutral-50">
          Online Shop
        </Link>
        <Link to={"/my-cart"} className="relative">
          <span className=" text-neutral-50"><HiOutlineShoppingBag className=" w-7 h-7" /></span>
          <span className="px-2 text-xs translate-x-[0.2rem] -translate-y-[1.1rem] text-red-500 absolute">
            2
          </span>
        </Link>
       </ContainerComponents>
      </div>
  );
};

export default HeaderComponents;
