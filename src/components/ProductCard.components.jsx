import React from "react";
import StarRatingComponents from "./StarRating.components";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductCardComponents = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug
  },
  // product : {
  //   id,
  //   name,
  //   grid_picture_url,
  //   story_html,
  //   slug,
  //   retail_price_cents
  // }
}) => {
  const { carts, addCart } = useCartStore();

  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleAddedCartBtn = (event) => {
    event.stopPropagation();
    toast.error("You can't add to My cart")
  }

  const nav = useNavigate();

  const handleRouteDetailPage = () => {
    nav(`/product-detail/${slug}`);
  };
  return (
    <div
      onClick={handleRouteDetailPage}
      className=" bg-white border flex flex-col border-neutral-300 rounded-md p-5 gap-3 hover: cursor-pointer"
    >
      <img src={image} className=" h-40 mx-auto my-auto mb-5" />
      <h1 className=" font-bold line-clamp-1 mt-auto">{title}</h1>
      <span className="">
        <StarRatingComponents rate={rate} />
      </span>
      <div className=" flex justify-between items-center">
        <span className=" ">
          <span className=" font-mono font-semibold">${price}</span>
        </span>
        {carts.find((cart) => cart.productId == id) ? (
          <button onClick={handleAddedCartBtn} className=" border border-neutral-700 bg-black text-white text-xs rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap">
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCartBtn}
            className=" border border-neutral-700 text-xs rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCardComponents;
