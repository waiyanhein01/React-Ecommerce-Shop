import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineCottage } from 'react-icons/md';

const BreadcrumbComponents = ({currentProductPage}) => {
  return (
    <div className=' flex items-center gap-1 mt-5'>
      <Link to={"/"} className=' text-neutral-300 inline-flex gap-1'><MdOutlineCottage className=' w-5 h-5'/>Home</Link>
      <span className=' text-neutral-500'><FiChevronRight /></span>
      <p className=" text-neutral-900">{currentProductPage}</p>
    </div>
  )
}

export default BreadcrumbComponents
