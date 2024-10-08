import React, { useState } from "react";
import ContainerComponents from "./Container.components";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";
import ShowProductCardComponents from "./ShowProductCard.components";
import { Link } from "react-router-dom";

const ShowProductCardGroupComponents = () => {
  const { products } = useProductStore();

  const [showProduct, setShowProduct] = useState(8);
  return (
    <ContainerComponents className="px-5 md:px-0">
      <div className=" mt-5 mb-5">
        <h1 className=" mb-5 text-3xl font-bold text-center">Our <span className=" text-blue-500">Popular</span> Products</h1>
        <p className=" mb-5 text-neutral-500 text-center">Experience top-notch quality and style with our sought-after selections.Discover a world of comfort, design and value</p>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {products
            .slice(0, showProduct)
            .map((product) => (
              <ShowProductCardComponents
                key={product.id}
                product={product}
              />
            ))}
        </div>

        <div className=" flex justify-center mt-5">
        <Link className=" bg-blue-500 hover:bg-blue-600 text-neutral-50 border border-blue-500 rounded-lg px-4 py-2" to={"/shop"}>See More Products</Link>

        </div>

      </div>
    </ContainerComponents>
  );
};

export default ShowProductCardGroupComponents;
