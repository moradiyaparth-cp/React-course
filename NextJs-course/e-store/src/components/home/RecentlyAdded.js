"use client"

import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox'

const RecentlyAdded = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.in/api/products?limit=5');
    const data = await response.json()
    // console.log(data)
    setProducts(data.products)
  }

  useEffect(
    () => {
      getProducts()
    }, []
  )
  return (
    <div className='bg-gray-100 p-3'>
      <Container>
        <h1 className='text-center text-3xl font-bold'>Recently Added Products</h1>
        <div className='max-w-[1320px] mx-auto'>
        <div className="my-4 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-3 mx-4 ">
          {
            products.map(
              (prod) => {
                return <ProductBox key={prod.id} product={prod}/>
              }
            )
          }
        </div>
        </div>

      </Container>
    </div>
  )
}

export default RecentlyAdded