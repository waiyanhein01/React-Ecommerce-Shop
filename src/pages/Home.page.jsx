import React from 'react'
import { ContainerComponent, HeroComponent, ProductCardGroup, ProductCategoryComponent, SliderComponent } from '../components'

const HomePage = () => {
  return (
    <ContainerComponent>
      {/* <SliderComponent/> */}
      <HeroComponent/>
      <ProductCategoryComponent />
      <ProductCardGroup />
    </ContainerComponent>
  )
}

export default HomePage
