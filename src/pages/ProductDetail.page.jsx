import React from "react";
import products from "../data/products";
import { useParams } from "react-router-dom";
import { ContainerComponent } from "../components";
import StarRatingComponents from "../components/StarRating.components";
import BreadcrumbComponents from "../components/Breadcrumb.components";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const currentProduct = products.find((product) => product.id == productId);
  return (
    <ContainerComponent className="px-5 md:px-0">
      <BreadcrumbComponents currentProductPage={"ProductDetail"}/>
      <div className=" border bg-white mt-5 mb-5 md:px-16 md:py-20 p-5 rounded-md">
        <div className=" flex flex-col justify-between items-center gap-10">
          <img src={currentProduct.image} alt="" className=" h-56" />
          <div className=" space-y-3">
            <h1 className=" text-2xl font-bold">{currentProduct.title}</h1>
            <h2 className=" bg-slate-300 rounded-md px-4 py-1 inline-block">{currentProduct.category}</h2>
            <p className="">{currentProduct.description}</p>
            <StarRatingComponents rate={currentProduct.rating.rate}/>
            <div className=" flex justify-between items-center">
                <span className="">Price: <span className=" font-mono font-bold">${currentProduct.price}</span></span>
                <button className=" border border-neutral-800 px-2 py-1 rounded-md">Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default ProductDetailPage;
