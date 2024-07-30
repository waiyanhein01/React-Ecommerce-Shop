import React from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbComponents = ({currentProductPage}) => {
  return (
    <div className=' flex gap-2 mt-5'>
      <Link to={"/"} className=' text-neutral-400'>Back</Link>
      <span className=' text-neutral-50'>/</span>
      <p className=" text-neutral-50">{currentProductPage}</p>
    </div>
  )
}

export default BreadcrumbComponents
