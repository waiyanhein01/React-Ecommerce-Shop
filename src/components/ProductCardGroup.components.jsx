import React from "react";
import ProductCardComponents from "./ProductCard.components";
import ContainerComponents from "./Container.components";
import products from "../data/products";

const ProductCardGroupComponents = () => {
  
  return (
    <ContainerComponents>
      <div className=" mt-5 mb-5">
        <h1 className=" text-white mb-3 text-xs">Available Product Lists</h1>

        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {products.map((product) => (
            <ProductCardComponents key={product.id} product={product} />
          ))}
        </div>
      </div>
    </ContainerComponents>
  );
};

export default ProductCardGroupComponents;
