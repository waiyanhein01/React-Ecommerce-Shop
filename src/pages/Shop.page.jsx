import React from "react";
import {
  ContainerComponent,
  ProductCardGroup,
  ProductCategoryComponent,
} from "../components";

const ShopPage = () => {
  return (
    <div className=" bg-color-gradient">
      <ContainerComponent>
        <ProductCategoryComponent />
        <ProductCardGroup />
      </ContainerComponent>
    </div>
  );
};

export default ShopPage;
