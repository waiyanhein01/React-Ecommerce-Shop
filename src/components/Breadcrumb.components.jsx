import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";

const BreadcrumbComponents = ({currentProductPage}) => {
  return (
    <div className=' flex items-center gap-1 mt-5'>
      <Link to={"/"} className=' text-neutral-300'>Back</Link>
      <span className=' text-neutral-50'><FiChevronRight /></span>
      <p className=" text-neutral-50">{currentProductPage}</p>
    </div>
  )
}

export default BreadcrumbComponents
