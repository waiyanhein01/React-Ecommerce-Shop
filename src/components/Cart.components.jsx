import React from 'react'

const CartComponents = ({cart}) => {
    // console.log(cart)
  return (
    <div className=' bg-white rounded-md p-3 flex justify-between items-center gap-5 '>
      <img src={cart.product.image} alt="" className=' h-14' />

      <div className="">
        <h1 className="">{cart.product.title}</h1>
        <span className=" text-neutral-500">price: ($ {cart.product.price})</span>
      </div>

      <div className="">
        <h1 className="">Quantity</h1>
        <div className=" mt-3 space-x-2">
            <button className=' bg-black text-white px-2 rounded-md'>-</button>
            <span>{cart.quantity}</span>
            <button className='bg-black text-white px-2 rounded-md'>+</button>
        </div>
      </div>

      <div className="">
        <span className=' font-bold text-right'>$ {cart.price}</span>
      </div>
    </div>
  )
}

export default CartComponents
