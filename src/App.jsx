import React from "react";
import {
  FooterComponent,
  HeaderComponent,
  ProductCardGroup,
  ProductCategoryComponent,
} from "./components";

const App = () => {
  return (
    <div className=" bg-slate-900">
      <div className="flex flex-col p-5 h-auto w-auto">
        <HeaderComponent />
        <ProductCategoryComponent />
        <ProductCardGroup />
        <FooterComponent />
      </div>
    </div>
  );
};

export default App;
