import React from 'react'

const ContainerComponents = ({children,className}) => {
  return (
    <main className={ `w-full md:w-[700px] sm:w-[600px] lg:w-[1000px] mx-auto ${className}`} >
      {children}
    </main>
  )
}

export default ContainerComponents
