import React from 'react'
import products from '../data/products'
import { ContainerComponent } from '../components'
import BreadcrumbComponents from '../components/Breadcrumb.components'

const MyCartPage = () => {

  // const currentProduct = products.find((product) => product.id == pro)
  return (
    <ContainerComponent>
      <BreadcrumbComponents currentProductPage={"MyCart"}/>
    </ContainerComponent>
  )
}

export default MyCartPage
