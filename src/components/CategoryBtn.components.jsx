import React from "react";

const CategoryBtnComponents = ({ categoryName, current }) => {
  return (
    <div>
      <button
        className={`border ${current ? " bg-neutral-900 text-white active:scale-90 duration-200" : "bg-white"} border-neutral-100 px-4 py-1 rounded-md text-nowrap text-sm`}
      >
        {categoryName}
      </button>
    </div>
  );
};

export default CategoryBtnComponents;
