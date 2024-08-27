import React from "react";
import {
  ContainerComponent,
  HeroSectionComponent,
  ShowProductCardGroup,
} from "../components";
import FeaturePage from "./Feature.page";

const HomePage = () => {
  return (
    <div className=" bg-color-gradient">
      <HeroSectionComponent />
      <ContainerComponent>
        <FeaturePage />
        <ShowProductCardGroup />
      </ContainerComponent>
    </div>
  );
};

export default HomePage;
