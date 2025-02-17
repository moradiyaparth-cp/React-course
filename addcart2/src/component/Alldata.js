import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../main.css'
import { CartContext } from '../Features/ContextProvider'


const Alldata = () => {
    const [productData, setProductData] = useState([])
    
    useEffect(() => {
     axios.get('https://fakestoreapi.com/products')
     .then((response)=>{
        // console.log(response.data)
        setProductData(response.data)
     })
    }, [])
    
    const {dispatch} = useContext(CartContext)
  return (
    <>
    <div className='container py-2'>
<div className='row'>

{
    productData?.map((data)=>(
        <div className="mb-4 py-5 col-4" key={data.id}>
            <div className="card card_data "   >
            <img src={data.image} className="card-img-top" alt="img not load" />
                <div className="card-body">
                    <h5 className="card-title">Title: {data.title}</h5>
                    <p className="card-text"><b>Price:</b> {data.price}</p>
                    <p className="card-text"><b>Description:</b> {data.description}</p>
                    <a target="_blank" className="btn btn-primary mx-2" onClick={() => dispatch({type: "Add", data: data})}>Add to Cart</a>
                </div>
            </div>
        </div>
    ))
    }
</div>

        
    </div>
    </>
  )
}

export default Alldata