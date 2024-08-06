import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const CartComponents = ({ cart }) => {
  // console.log(cart)
  return (
    <div className=" bg-white rounded-md px-5 py-3 flex justify-between items-center gap-5 ">
      <div className=" flex justify-between items-center gap-10">
        <img src={cart.product.image} alt="" className=" h-14" />

        <div className="">
          <h1 className="">{cart.product.title}</h1>
          <span className=" text-neutral-500">
            price: ($ {cart.product.price})
          </span>
        </div>
      </div>

      <div className="">
        <h1 className="">Quantity</h1>
        <div className=" mt-3 flex items-center justify-between">
          <button className="">
            <CiCircleMinus className=" w-6 h-6" />
          </button>
          <span>{cart.quantity}</span>
          <button className="">
            <CiCirclePlus className=" w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="">
        <span className=" font-bold text-right">$ {cart.price}</span>
      </div>
    </div>
  );
};

export default CartComponents;
