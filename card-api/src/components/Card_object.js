import React from 'react'
import productData from './data.json'

const Card_object = () => {

  return (
    <>
    <div>
                <div className="container">
                    <div className="row">
                        {productData.length >= 0 && productData.map((data) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={data.id}>
                            <div className="card" >
                            <img src={data.images} className="card-img-top" alt="img not load" onError={(e) => e.target.src = "https://i.imgur.com/3oXNBst.jpeg"} />
                            <div className="card-body">
                                <h5 className="card-title">Title: {data.title}</h5>
                                <p className="card-text"><b>Price:</b> {data.price}</p>
                                <p className="card-text"><b>Description:</b> {data.description}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
    </div>
    </>
  )
}

export default Card_object