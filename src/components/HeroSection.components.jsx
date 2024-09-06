import React from "react";
import { Link } from "react-router-dom";

const HeroComponents = () => {
  return (
    <div className="diff aspect-[16/9]">
      <div className="diff-item-1">
        <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
          SHOP
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 grid place-content-center text-9xl font-black">
          SHOP
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};

export default HeroComponents;
