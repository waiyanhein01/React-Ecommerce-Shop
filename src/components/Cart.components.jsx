import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import useProductStore from "../store/useProductStore";

const CartComponents = ({ cart:{id,productId,quantity} }) => {
  const {products} = useProductStore()

  const product = products.find((el) => el.id === productId )

  const cost = product.price * quantity
  return (
    <div className=" bg-white rounded-md px-5 py-3 flex justify-between items-center gap-5 ">
      <div className=" flex justify-between items-center gap-5">
        <img src={product.image} alt="" className=" h-14" />

        <div className="">
          <h1 className="">{product.title}</h1>
          <span className=" text-neutral-500">
            price: <span className="font-mono font-semibold text-neutral-900">${product.price}</span>
          </span>
        </div>
      </div>

      <div className="">
        <h1 className="">Quantity</h1>
        <div className=" mt-3 flex items-center justify-between">
          <button className="">
            <CiCircleMinus className=" w-6 h-6" />
          </button>
          <span>{quantity}</span>
          <button className="">
            <CiCirclePlus className=" w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="">
        <span className=" font-bold text-right font-mono">$ {cost.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartComponents;
