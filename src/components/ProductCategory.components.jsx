import React from "react";
import CategoryBtnComponents from "./CategoryBtn.components";
const ProductCategoryComponents = () => {
  const catagories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className=" mt-5">
      <h1 className=" mb-2 text-neutral-50">Product Categories</h1>
      <div className=" flex gap-3 overflow-x-scroll bar-hide">
        <CategoryBtnComponents current={true} categoryName="all"/>
        {catagories.map((category) => (
          <CategoryBtnComponents key={category} categoryName={category}/>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryComponents;
