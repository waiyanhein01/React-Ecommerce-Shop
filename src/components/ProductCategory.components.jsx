import React from "react";
import CategoryBtnComponents from "./CategoryBtn.components";
import ContainerComponents from "./Container.components";
import useCategoryStore from "../store/useCategoryStore";

const ProductCategoryComponents = () => {
  const {categories} = useCategoryStore()
  return (
    <ContainerComponents className="px-5 md:px-0">
      <div className=" mt-5">
        <h1 className=" mb-2 text-sm">Product Categories</h1>
        <div className=" flex gap-3 overflow-x-scroll bar-hide">
          {categories.map((category) => (
            <CategoryBtnComponents key={category.id} category={category} />
          ))}
        </div>
      </div>
    </ContainerComponents>
  );
};

export default ProductCategoryComponents;
