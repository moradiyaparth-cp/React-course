import React from 'react'

const CartProduct = ({product}) => {
  return (
    <div className='d-flex border py-2 px-2 mt-3'>
        <img src={product.image} className="card-img-top w-25 h-25" alt="img not load" />
                <div className='detail'>
                    <h5 className="card-title">Title: {product.title}</h5>
                    <p className="card-text"><b>Price:</b> {product.price}</p>
                    <p className="card-text"><b>Description:</b> {product.description}</p>
                    <div className="buttons">
                        <button className='rounded-circle px-2'><b>-</b></button>
                        <button className='rounded'>{product.quantity}</button>
                        <button className='rounded-circle px-2'><b>+</b></button>
                    </div>
                    <button className='btn btn-danger'>Remove</button>
                </div>
    </div>
  )
}

export default CartProduct