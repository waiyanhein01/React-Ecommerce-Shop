import React from "react";
import StarRatingComponents from "./StarRating.components";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const ProductCardComponents = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  const {carts} = useCartStore()
  return (
    <Link
      to={`/product-detail/${id}`}
      className=" bg-white border flex flex-col border-neutral-100 rounded-md p-5 gap-3"
    >
      <img src={image} alt="" className=" h-40 mx-auto my-auto mb-5" />
      <h1 className=" font-bold line-clamp-1 mt-auto">{title}</h1>
      <span className="">
        <StarRatingComponents rate={rate} />
      </span>
      <div className=" flex justify-between items-center">
        <span className=" ">Price: <span className=" font-mono font-semibold">${price}</span></span>
        {carts.find((cart) => cart.productId == id) ? (
          <button className=" border border-neutral-700 bg-black text-white text-xs rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap">
            Added
          </button>
        ) : (
          <button className=" border border-neutral-700 text-xs rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap">
            Add Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCardComponents;
