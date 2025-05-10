import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Card = () => {
    const [userData, setData] = useState([])
    const [storeCard, setStoreCard] = useState(null)

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
            // console.log('Readmore Data:', readData);
        })   
    }

    const [show, setShow] = useState(false);
   const [addProduct, setAddProduct] = useState(false);
 
    const handleShow = (card) =>{
        setStoreCard(card) // je card ne select karshe eni value setStoreCard ma store thase
        // console.log("aaa",card)
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
        setAddProduct(false)
        setStoreCard(null)
    }
    const handleUpdate = () => {
        if (!storeCard) return; // storeCard ni detail no hoy to tyathi j return thavu pade

        axios.put(`https://api.escuelajs.co/api/v1/products/${storeCard.id}`, {
            // images: storeCard.images,
            title: storeCard.title,
            price: storeCard.price,
            description: storeCard.description
        })
        // console.log("aaa: ", storeCard.description)
        .then((response)=>{
            const updateData = userData.map(val=>
                val.id === storeCard.id ? response.data : val
            )
            setData(updateData)
            handleClose();

        })
    }
    const handleAdd = () => setAddProduct(true);
    const Adddata = {images: ["https://i.imgur.com/jb5Yu0h.jpeg"], categoryId: 1, title: '', price: '', description:''}
    const [inputData, setInputData] = useState(Adddata)

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("https://api.escuelajs.co/api/v1/products/", inputData)
      .then((response) => {
        // console.log("res", response);
        setData(response.data)
        setAddProduct(false);
        window.location.reload();
      })
    }
  return (
    <>

<div style={{textAlign:'center'}}>
        <Button className='mb-5 my-5' variant="dark" onClick={handleAdd}>
        Add New Product
        </Button>
        <Modal show={addProduct} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                 <Form.Group className="mb-3">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="text"
                    name='images'
                    value={inputData.images}
                    onChange={(e) => setInputData({...inputData, images: e.target.value})} // value edit karva dese
                  />
                  </Form.Group>
                 <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name='category'
                    value={inputData.category}
                    onChange={(e) => setInputData({...inputData, category: e.target.value})} // value edit karva dese
                  />
                  </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Title</Form.Label>
                  <Form.Control
                    type="text"
                    name='title'
                    value={inputData.title}
                    onChange={(e) => setInputData({...inputData, title: e.target.value})} // value edit karva dese
                  />
                  </Form.Group>
                  <Form.Group className="mb-3">
                  <Form.Label>Enter Price</Form.Label>
                  <Form.Control
                    type="text"
                    name='price'
                    value={inputData.price}
                    onChange={(e) => setInputData({...inputData, price: e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Description</Form.Label>
                  <Form.Control as="textarea" rows={3}
                  name='description' 
                  value={inputData.description}
                  onChange={(e) => setInputData({...inputData, description: e.target.value})}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

    <div>
        
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {storeCard && ( // je product select karsho e form ma fill thay jashe
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter Title</Form.Label>
              <Form.Control
                type="text"
                value={storeCard.title}
                onChange={(e) => setStoreCard({...storeCard, title: e.target.value})} // value edit karva dese
              />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Enter Price</Form.Label>
              <Form.Control
                type="text"
                value={storeCard.price}
                onChange={(e) => setStoreCard({...storeCard, price: e.target.value})}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              
            >
              <Form.Label>Enter Description</Form.Label>
              <Form.Control as="textarea" rows={3} 
              value={storeCard.description}
              onChange={(e) => setStoreCard({...storeCard, description: e.target.value})}
              />
            </Form.Group>
          </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    <div>
                <div className="container">
                    <div className="row">
                        {userData.length >= 0 && userData.map((data) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={data.id}>
                            <div className="card" >
                            <img src={data.images} className="card-img-top" alt="img not load" />
                            <div className="card-body">
                                <h5 className="card-title">Title: {data.title}</h5>
                                <p className="card-text"><b>Price:</b> {data.price}</p>
                                <p className="card-text"><b>Description:</b> {data.description}</p>
                                <a target="_blank" className="btn btn-primary mx-2" onClick={()=>handlereadMore(data.id)}>Read More</a>
                                <a className="btn btn-danger mx-2" onClick={() => handledeletCard(data.id)}>Delete</a>
                                <a className="btn btn-secondary mx-2" onClick={()=> handleShow(data)}>Update</a>
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

export default Card