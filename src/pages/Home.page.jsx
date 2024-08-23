import React from 'react'
import { ContainerComponent, FeatureSectionComponent, HeroSectionComponent, ProductCardGroup, ProductCategoryComponent } from '../components'

const HomePage = () => {
  return (
    <ContainerComponent>
      {/* <SliderComponent/> */}
      <HeroSectionComponent/>
      <FeatureSectionComponent/>
      <ProductCategoryComponent />
      <ProductCardGroup />
    </ContainerComponent>
  )
}

export default HomePage
