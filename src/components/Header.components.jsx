import React from "react";
import ContainerComponents from "./Container.components";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useCartStore from "../store/useCartStore";
import shopLogo from "../Lottie/shopLogo.json"
import Lottie from "lottie-react";

const HeaderComponents = () => {
  const { carts } = useCartStore();
  return (
    <div className=" bg-color-black">
      <ContainerComponents className={"flex justify-between items-center"}>
        <Link
          to={"/"}
          className=" lg:text-3xl text-2xl font-bold text-neutral-50"
        >
          <Lottie
                animationData={shopLogo}
                loop={true}
                className=" w-[100px]"
              />
        </Link>
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
