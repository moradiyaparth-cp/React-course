import Container from '@/components/Container'
import ProductBox from '@/components/ProductBox'
import {getCategories, getProducts} from '@/library'
import React from 'react'

const StorePage = () => {
  return (
    <Container className="grid grid-cols-5 gap-3">
      <CategoryListing/>
      <ProductListing/>
    </Container>
  )
}


const CategoryListing = async () =>{
  const data = await getCategories();
  return <div className=''>
    <div className='text-2xl'>Categories</div>
        <ul>
          {
            
            data.map((d,i) => {

              <li className='p-2 border my-2' key={"category-" + i}>{d.toUpperCase()}</li>
            }
            )
            
          }
          
        </ul>
  </div>
}
const ProductListing = async () =>{
  const data = await getProducts()
  return <div className='col-span-4 grid grid-cols-3 gap-5 mt-3'>
    {
      data.map(
        (d) => <ProductBox product={d} key={"product-" + d.id}/>
      )
    }
  </div>
}
export default StorePage