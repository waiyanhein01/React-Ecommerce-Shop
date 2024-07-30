import React from 'react'

const ContainerComponents = ({children,className}) => {
  return (
    <main className={ `lg:w-[1000px] md:w-[720px] w-full mx-auto ${className}`} >
      {children}
    </main>
  )
}

export default ContainerComponents
