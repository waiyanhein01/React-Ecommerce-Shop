import React from 'react'
import { ContainerComponent, ProductCardGroup, ProductCategoryComponent } from '../components'

const HomePage = () => {
  return (
    <ContainerComponent>
      <ProductCategoryComponent />
      <ProductCardGroup />
    </ContainerComponent>
  )
}

export default HomePage
