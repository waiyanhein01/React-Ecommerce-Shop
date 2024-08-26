import React from "react";
import ContainerComponents from "./Container.components";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import shopLogo from "../Lottie/shopLogo.json"
import Lottie from "lottie-react";
import logo from "../../public/logo.svg"
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const HeaderComponents = () => {
  const { carts } = useCartStore();
  return (
    <div className=" bg-color-custom p-3">
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
        <div className=" flex gap-5 text-neutral-900">
          <Link to={"/"} className=" hover:text-blue-500 hover:underline underline-offset-4 font-semibold">Home</Link>
          <Link to={"/shop"} className=" hover:text-blue-500 hover:underline underline-offset-4 font-semibold">Shop</Link>
          <Link to={"/feature"} className=" hover:text-blue-500 hover:underline underline-offset-4 font-semibold">Feature</Link>
        </div>
        <Link to={"/my-cart"} className="relative hover:bg-blue-300 rounded-full p-3">
          <span className=" text-neutral-50">
          <MdOutlineLocalGroceryStore className=" w-8 h-8 text-neutral-950" />
            <span className="px-2 text-xs bg-red-500 rounded-full text-red-50 absolute translate-x-5 -translate-y-10">
              {carts.length}
            </span>
          </span>
        </Link>
      </ContainerComponents>
    </div>
  );
};

export default HeaderComponents;
