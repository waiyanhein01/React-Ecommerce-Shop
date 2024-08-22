import React from "react";
import ContainerComponents from "./Container.components";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useCartStore from "../store/useCartStore";
import shopLogo from "../Lottie/shopLogo.json"
import Lottie from "lottie-react";
import logo from "../../public/logo.svg"

const HeaderComponents = () => {
  const { carts } = useCartStore();
  return (
    <div className=" bg-color-black p-3">
      <ContainerComponents className={"flex justify-between items-center"}>
        <Link
          to={"/"}
          className=" lg:text-3xl text-2xl font-bold text-neutral-50"
        >
          {/* <Lottie
                animationData={shopLogo}
                loop={true}
                className=" w-[100px]"
              /> */}
              <img src={logo} alt="" className=" w-10" />
        </Link>
        <div className=" flex gap-5 text-neutral-50">
          <Link to={"/"} className=" hover:text-blue-500">Home</Link>
          <Link to={"/shop"} className=" hover:text-blue-500">Shop</Link>
          <Link to={"/feature"} className=" hover:text-blue-500">Feature</Link>
        </div>
        <Link to={"/my-cart"} className="relative">
          <span className=" text-neutral-50">
            <HiOutlineShoppingBag className=" w-7 h-7" />
            <span className="px-2 text-xs translate-x-[3px] -translate-y-[1.1rem] text-red-50 absolute">
              {carts.length}
            </span>
          </span>
        </Link>
      </ContainerComponents>
    </div>
  );
};

export default HeaderComponents;
