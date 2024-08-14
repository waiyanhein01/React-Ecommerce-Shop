import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryBtnComponents = ({ category: { id, name, isActive } }) => {
  const { activeCategoryBtn } = useCategoryStore();
  const handleActiveBtn = () => {
    activeCategoryBtn(id);
  };

  return (
    <div>
      <button
        onClick={handleActiveBtn}
        className={`border active:scale-90 duration-200 ${
          isActive
            ? " bg-neutral-900 text-white"
            : "bg-white"
        } border-neutral-100 px-4 py-1 rounded-md text-nowrap text-sm`}
      >
        {name}
      </button>
    </div>
  );
};

export default CategoryBtnComponents;
