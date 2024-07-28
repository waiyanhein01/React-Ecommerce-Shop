import React from "react";

const CategoryBtnComponents = ({ categoryName, current }) => {
  return (
    <div>
      <button
        className={`border ${
          current ? "text-neutral-950 bg-white active:scale-90 duration-200" : "text-white"
        } border-neutral-50 px-4 py-1 rounded-md text-nowrap text-sm`}
      >
        {categoryName}
      </button>
    </div>
  );
};

export default CategoryBtnComponents;
