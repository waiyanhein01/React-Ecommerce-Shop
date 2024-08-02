import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router-dom'
import NotFound from "../Lottie/NotFound.json"

const ErrorPage = () => {
  return (
    <div className=' flex flex-col text-neutral-50 justify-center items-center h-screen'>
      <Lottie animationData={NotFound} loop={true} className=' w-[500px]'/>
      <Link to={"/"} className=' border border-blue-500 active:scale-95 duration-200 rounded-md px-3 py-1 mt-7 bg-blue-500'>Return Home</Link>
    </div>
  )
}

export default ErrorPage
