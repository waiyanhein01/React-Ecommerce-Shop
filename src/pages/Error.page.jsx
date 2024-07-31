import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className=' flex flex-col text-neutral-50 justify-center items-center h-screen'>
      <h1 className=" text-3xl">404 Not Found</h1>
      <h3 className=" text-xl">Your patch doesn't exit.</h3>
      <Link to={"/"} className=' border border-neutral-50 rounded-md px-3 py-1 mt-7'>Return Home</Link>
    </div>
  )
}

export default ErrorPage
