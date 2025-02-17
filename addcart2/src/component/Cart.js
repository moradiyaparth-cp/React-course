import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProduct from './CartProduct'


const Cart = () => {
    const {cart} = useContext(CartContext)
  return (
    <div className='container'>
        <div className="row">
            <div className="col-8">
                {cart.map(p => (
                    <CartProduct product={p}></CartProduct>
                ))}
            </div>
            <div className="col-4">
                <div className="bg-secondary">
                    <h5>Total Items: </h5>
                    <h5>Total Price: </h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart