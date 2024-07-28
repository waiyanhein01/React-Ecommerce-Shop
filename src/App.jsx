import React from "react";
import { FooterComponent, HeaderComponent, ProductCard, ProductCategoryComponent } from "./components";

const App = () => {
  return (
    <div className=" bg-slate-900">
      <div className=" container mx-auto flex flex-col p-5 h-screen w-auto">
      <HeaderComponent />
      <ProductCategoryComponent/>
      <ProductCard/>
      <FooterComponent />
    </div>
    </div>
  );
};

export default App;
