import React from 'react'
import { ContainerComponent, ProductCardGroup, ProductCategoryComponent } from '../components'

const ShopPage = () => {
  return (
    <ContainerComponent>
      <ProductCategoryComponent />
      <ProductCardGroup />
    </ContainerComponent>
  )
}

export default ShopPage
