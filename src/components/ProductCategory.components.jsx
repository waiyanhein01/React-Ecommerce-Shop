import React from "react";
import CategoryBtnComponents from "./CategoryBtn.components";
import ContainerComponents from "./Container.components";
const ProductCategoryComponents = () => {
  const catagories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <ContainerComponents>
      <div className=" mt-5">
        <h1 className=" mb-2 text-sm">Product Categories</h1>
        <div className=" flex gap-3 overflow-x-scroll bar-hide">
          <CategoryBtnComponents current={true} categoryName="all" />
          {catagories.map((category) => (
            <CategoryBtnComponents key={category} categoryName={category} />
          ))}
        </div>
      </div>
    </ContainerComponents>
  );
};

export default ProductCategoryComponents;
