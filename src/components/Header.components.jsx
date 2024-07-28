import React from "react";

const HeaderComponents = () => {
  return (
      <div className=" flex justify-between">
        <h1 className=" text-3xl font-bold text-neutral-50">Online Shop</h1>
        <button className=" border border-neutral-50 rounded-md py-1 px-4 relative">
          <span className=" text-neutral-50">My Cart</span>
          <span className=" bg-red-600 px-2 text-xs translate-x-2 -translate-y-3 rounded-md absolute text-white">
            1
          </span>
        </button>
      </div>
  );
};

export default HeaderComponents;
