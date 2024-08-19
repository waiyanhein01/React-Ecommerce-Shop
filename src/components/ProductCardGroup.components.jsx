import React from "react";
import ProductCardComponents from "./ProductCard.components";
import ContainerComponents from "./Container.components";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";

const ProductCardGroupComponents = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();

  const currentCategory = categories.find((el) => el.isActive === true);
  return (
    <ContainerComponents className="px-5 md:px-0">
      <div className=" mt-5 mb-5">
        <h1 className=" mb-3 text-sm">Available Product Lists</h1>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {products
            .filter(
              (el) =>
                currentCategory.name === "all" ||
                el.category === currentCategory.name
            )
            .map((product) => (
              <ProductCardComponents key={product.id} product={product} />
            ))}
        </div>
      </div>
    </ContainerComponents>
  );
};

export default ProductCardGroupComponents;
