import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Card = () => {
    const [userData, setData] = useState([])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then((response)=>{
            // console.log("aaa",response) // badha j data asvhe
            setData(response.data)
        })      
    }, [])
    
    
    const handledeletCard = (id) =>{
        axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(()=>{
            const cardData = userData.filter(userData => userData.id !== id);
            setData(cardData)
            // console.log('Deleted data', cardData); 
        })     
    }

    const handlereadMore = (id) =>{
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(()=>{
            const readData = userData.filter(userData => userData.id === id);
            setData(readData)
            console.log('Readmore Data:', readData);
        })   
    }

  return (
    <div>
                <div className="container">
                    <div className="row">
                        {userData.map((data) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={data.id}>
                            <div className="card" >
                            <img src={data.images} className="card-img-top" alt="img not load" />
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">Price: {data.price}</p>
                                <p className="card-text">Description: {data.description}</p>
                                <a target="_blank" className="btn btn-primary" onClick={()=>handlereadMore(data.id)}>Read More</a>
                                <a className="btn btn-primary mx-2" onClick={() => handledeletCard(data.id)}>Delete</a>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            
    </div>
  )
}

export default Card