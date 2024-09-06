import React from "react";
import {
  ContainerComponent,
  HeroSectionComponent,
  QualityShoeComponent,
  ShowProductCardGroup,
} from "../components";
import FeaturePage from "./Feature.page";
import ContactPage from "./Contact.page";

const HomePage = () => {
  return (
    <div className=" bg-color-gradient">
      <HeroSectionComponent />
      <ContainerComponent>
        <FeaturePage />
        <ShowProductCardGroup />
        <QualityShoeComponent />
        <ContactPage/>
      </ContainerComponent>
    </div>
  );
};

export default HomePage;
