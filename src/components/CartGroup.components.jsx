import React from "react";
import CartComponents from "./Cart.components";
import ContainerComponents from "./Container.components";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import Lottie from "lottie-react";
import Empty from "../Lottie/Empty.json";

const CartGroupComponents = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find(({ id }) => id === cv.productId).price;
    const cost = cv.quantity * price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;
  return (
    <div className=" flex flex-col gap-3 mt-5">
      <div className=" h-[300px] gap-3 flex flex-col overflow-y-scroll bar-hide">
        {carts.length === 0 ? (
          <div className=" flex flex-col items-center justify-center">
            {
              <Lottie
                animationData={Empty}
                loop={true}
                className=" w-[270px]"
              />
            }
            <span>There is no carts.</span>
          </div>
        ) : (
          <>
            {carts.map((cart) => (
              <CartComponents cart={cart} key={cart.id} />
            ))}
          </>
        )}
      </div>

      <div className=" relative bottom-5 left-0 w-full mt-5">
        <ContainerComponents className="px-5 md:px-0">
          <div className=" border-t border-neutral-950 mb-5">
            <div className="mt-3 flex justify-end gap-10">
              <div className=" ">
                <h1 className=" text-neutral-400">Total($)</h1>
                <p className=" text-right font-mono font-semibold">
                  {total.toFixed(2)}
                </p>
              </div>
              <div className="">
                <h1 className=" text-neutral-400">Tax(5%)</h1>
                <p className=" text-right text-xl font-mono font-semibold">
                  {tax.toFixed(2)}
                </p>
              </div>
              <div className="">
                <h1 className=" text-neutral-400">Net Total($)</h1>
                <p className=" text-right text-2xl font-bold font-mono">
                  {netTotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className=" text-end">
            <Link className=" border border-neutral-950 rounded-md px-3 py-1">
              Order Now
            </Link>
          </div>
        </ContainerComponents>
      </div>
    </div>
  );
};

export default CartGroupComponents;
