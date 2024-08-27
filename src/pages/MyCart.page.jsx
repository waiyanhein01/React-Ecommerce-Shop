import React from 'react'
import { ContainerComponent } from '../components'
import BreadcrumbComponents from '../components/Breadcrumb.components'
import CartGroupComponents from '../components/CartGroup.components'

const MyCartPage = () => {

  // const currentProduct = products.find((product) => product.id == pro)
  return (
    <ContainerComponent className="h-auto px-5 md:px-0 bg-color-gradient">
      <BreadcrumbComponents currentProductPage={"MyCart"}/>
      <CartGroupComponents/>
    </ContainerComponent>
  )
}

export default MyCartPage
