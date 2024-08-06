import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";

const BreadcrumbComponents = ({currentProductPage}) => {
  return (
    <div className=' flex items-center gap-1 mt-5'>
      <Link to={"/"} className=' text-neutral-400'>Back</Link>
      <span className=' text-neutral-900'><FiChevronRight /></span>
      <p className=" text-neutral-900">{currentProductPage}</p>
    </div>
  )
}

export default BreadcrumbComponents
