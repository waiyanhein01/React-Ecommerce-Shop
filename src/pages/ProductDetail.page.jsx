import React from "react";
import { useParams } from "react-router-dom";
import { ContainerComponent } from "../components";
import StarRatingComponents from "../components/StarRating.components";
import BreadcrumbComponents from "../components/Breadcrumb.components";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetailPage = () => {
  const { productSlug } = useParams();

  const { products } = useProductStore();

  const { carts, addCart } = useCartStore();

  const currentProduct = products.find(
    (product) => product.slug == productSlug
  );

  const {
    id,
    image,
    category,
    brand_name,
    price,
    title,
    description,
    rating: { rate },
  } = currentProduct;

  const handleAddCartBtn = () => {
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleAddedCartBtn = () => {
    toast.error("You already added to My cart");
  };

  return (
    <div className=" bg-color-gradient">
      <ContainerComponent className="px-5 md:px-0">
        <BreadcrumbComponents currentProductPage={"ProductDetail"} />
        <div className=" border border-neutral-300 bg-white mt-5 mb-5 md:px-16 md:py-20 p-5 rounded-md">
          <div className=" grid grid-cols-2 justify-between items-center gap-10">
            <div className=" col-span-1">
              <div className="grid grid-cols-3 gap-3">
                <div className=" col-span-3 mx-auto bg-neutral-100 p-3">
                  <img src={image} alt="" className=" h-60" />
                </div>

                <div className=" col-span-1 bg-neutral-100 p-3">
                  <img src={image} alt="" className=" h-32" />
                </div>

                <div className=" col-span-1 bg-neutral-100 p-3">
                  <img src={image} alt="" className=" h-32" />
                </div>

                <div className=" col-span-1 bg-neutral-100 p-3">
                  <img src={image} alt="" className=" h-32" />
                </div>
              </div>
            </div>
            <div className=" col-span-1">
              <h1 className=" text-xl md:text-2xl font-bold">{title}</h1>
              <h2 className=" bg-slate-300 rounded-md px-4 py-1 inline-block">
                {brand_name}
              </h2>
              <p className="">{description}</p>
              <StarRatingComponents rate={rate} />
              <div className=" flex justify-between items-center">
                <span className="">
                  <span className=" font-mono font-bold text-lg">${price}</span>
                </span>
                {carts.find((cart) => cart.productId == id) ? (
                  <button
                    onClick={handleAddedCartBtn}
                    className=" border border-blue-500 bg-blue-500 text-white rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap"
                  >
                    Added
                  </button>
                ) : (
                  <button
                    onClick={handleAddCartBtn}
                    className=" border border-blue-500 rounded-md px-3 py-1 active:scale-90 duration-200 text-nowrap"
                  >
                    Add Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default ProductDetailPage;
