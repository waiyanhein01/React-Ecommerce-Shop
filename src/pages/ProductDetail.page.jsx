import React from "react";
import { useParams } from "react-router-dom";
import { ContainerComponent } from "../components";
import StarRatingComponents from "../components/StarRating.components";
import BreadcrumbComponents from "../components/Breadcrumb.components";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const { products } = useProductStore();

  const {carts,addCart} = useCartStore()

  const currentProduct = products.find((product) => product.id == productId);

  const {id,image,category, title, description,rating:{rate}} =currentProduct

  const handleAddCartBtn = () => {
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleAddedCartBtn = (event) => {
    toast.error("You already added to My cart")
  }

  return (
    <ContainerComponent className="px-5 md:px-0">
      <BreadcrumbComponents currentProductPage={"ProductDetail"} />
      <div className=" border bg-white mt-5 mb-5 md:px-16 md:py-20 p-5 rounded-md">
        <div className=" flex flex-col justify-between items-center gap-10">
          <img src={image} alt="" className=" h-56" />
          <div className=" space-y-3">
            <h1 className=" text-2xl font-bold">{title}</h1>
            <h2 className=" bg-slate-300 rounded-md px-4 py-1 inline-block">
              {category}
            </h2>
            <p className="">{description}</p>
            <StarRatingComponents rate={rate} />
            <div className=" flex justify-between items-center">
              <span className="">
                <span className=" font-mono font-bold text-lg">
                  ${currentProduct.price}
                </span>
              </span>
              {carts.find((cart) => cart.productId == id) ? (
                <button
                onClick={handleAddedCartBtn}
                  className=" border border-neutral-700 bg-black text-white rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap"
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={handleAddCartBtn}
                  className=" border border-neutral-700 rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap"
                >
                  Add Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default ProductDetailPage;
