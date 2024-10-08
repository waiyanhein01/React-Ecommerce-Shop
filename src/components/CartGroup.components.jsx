import React from "react";
import CartComponents from "./Cart.components";
import ContainerComponents from "./Container.components";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import Lottie from "lottie-react";
import EmptyCart from "../Lottie/EmptyCart.json";

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
    <div className=" h-[750px] md:h-[420px] flex flex-col  gap-3 mt-5">
      <div className=" gap-3 flex flex-col flex-grow overflow-y-scroll bar-hide">
        {carts.length === 0 ? (
          <div className=" flex flex-col items-center justify-center h-[600px]">
            {
              <Lottie
                animationData={EmptyCart}
                loop={true}
                className=" w-[230px]"
              />
            }
            <span>There is no items.<Link to={"/"} className=" border border-neutral-950 px-3 py-1 rounded-lg ms-2 bg-neutral-950 text-neutral-50">Buy Now</Link></span>
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
          <div className=" border-t border-neutral-950 mb-3">
            <div className="mt-3 flex justify-end md:gap-10 gap-5">
              <div className=" ">
                <h1 className=" text-neutral-500">Total($)</h1>
                <p className=" text-right font-mono font-semibold">
                  {total.toFixed(2)}
                </p>
              </div>
              <div className="">
                <h1 className=" text-neutral-500">Tax(5%)</h1>
                <p className=" text-right text-lg md:text-xl font-mono font-semibold">
                  {tax.toFixed(2)}
                </p>
              </div>
              <div className="">
                <h1 className=" text-neutral-500 text-nowrap">Net Total($)</h1>
                <p className=" text-right text-xl md:text-2xl font-bold font-mono">
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
