import React from "react";
import carts from "../data/carts";
import CartComponents from "./Cart.components";
import ContainerComponents from "./Container.components";
import { Link } from "react-router-dom";

const CartGroupComponents = () => {
  return (
    <div className=" flex flex-col gap-3 mt-5">
      {carts.map((cart) => (
        <CartComponents cart={cart} />
      ))}

      <div className=" absolute bottom-20 left-0 w-full ">
        <ContainerComponents>
          <div className=" border-t border-neutral-50 mb-5">
            <div className="mt-3 flex justify-end gap-10">
              <div className=" ">
                <h1 className=" text-neutral-400">Total($)</h1>
                <p className=" text-right text-white">66.9</p>
              </div>
              <div className="">
                <h1 className=" text-neutral-400">Tax(10%)</h1>
                <p className=" text-right text-white text-xl">12.9</p>
              </div>
              <div className="">
                <h1 className=" text-neutral-400">Net Total($)</h1>
                <p className=" text-right text-white text-2xl font-bold">
                  123.9
                </p>
              </div>
            </div>
          </div>
          <div className=" text-end">
            <Link className=" text-neutral-50 border border-neutral-50 rounded-md px-3 py-1">
              Order Now
            </Link>
          </div>
        </ContainerComponents>
      </div>
    </div>
  );
};

export default CartGroupComponents;
