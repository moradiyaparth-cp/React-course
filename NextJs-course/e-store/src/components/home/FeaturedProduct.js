import React from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox'

const FeaturedProduct = async () => {
  const response = await fetch('https://fakestoreapi.in/api/products?limit=5')
  const data = await response.json()
  console.log(data.products)
  return (
    <div className='p-3'>
      <Container>
        <h1 className='text-center text-3xl font-bold'>Featured Products</h1>
        <div className="max-w-[1320px] my-4 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-3 mx-4 ">
        {
            data.products.map(
              (prod) => {
                return <ProductBox key={prod.id} product={prod}/>
              }
            )
          }
        </div>
      </Container>
    </div>
  )
}

export default FeaturedProduct