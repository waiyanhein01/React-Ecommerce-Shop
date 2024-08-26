import React from "react";
import {
  ContainerComponent,
  FeatureSectionComponent,
  HeroSectionComponent,
  ShowProductCardGroup,
} from "../components";

const HomePage = () => {
  return (
    <>
      <HeroSectionComponent />
      <ContainerComponent>
        <FeatureSectionComponent />
        <ShowProductCardGroup />
      </ContainerComponent>
    </>
  );
};

export default HomePage;
