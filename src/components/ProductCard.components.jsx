import React from "react";
import StarRatingComponents from "./StarRating.components";

const ProductCardComponents = ({ product: { id, title, price, image, rating:{rate} } }) => {
  return (
    <div className=" bg-white border flex flex-col border-neutral-50 rounded-md p-5 gap-3">
      <img src={image} alt="" className=" h-40 mx-auto my-auto mb-5" />
      <h1 className=" font-bold line-clamp-1 mt-auto">{title}</h1>
      <span className="">
        <StarRatingComponents rate={rate}/>
      </span>
      <div className=" flex justify-between items-center">
        <span className="">Price ($ {price})</span>
        <button className=" border border-neutral-700 text-xs rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardComponents;
