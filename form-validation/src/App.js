import React, {useState} from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const App = () => {
 
  const [formdata, setformData] = useState({
    fname: "",
    email: "",
    mobno: "",
    standard: "",
  })
  // console.log("eee", formdata)

  const [submitteddata, setsubmittedData] = useState([])
  const [error, setError] = useState(false)
  const [storevalue, setstoreValue] = useState([])
  const [updatebutton, setudateButton] = useState(false)
  const [editIndex, setEditIndex] = useState()

  const data = (e) =>{
    setformData({...formdata, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(formdata.fname === "" || formdata.email === "" || formdata.mobno?.length !== 10 || formdata.standard === ""){
      setError(true)
    }
    else
    {
      submitteddata.push(formdata); // form data ne push kari didho submitteddata ma 
      setstoreValue([{submitteddata} , ...storevalue])
    }
    // console.log("aaa", storevalue) // data check karshe

    setformData({
      fname: "",
      email: "",
      mobno: "",
      standard: ""
    });
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [deleteId,setDeleteId] = useState('');

  function deleteData (i){
    setDeleteId(i)
    setShow(true)
    // console.log(i, "deleted row")
  //  if (window.confirm("You Want To Delete Data ??")) {
  //     let total = [...submitteddata]
  //     total.splice(i,1)
  //     setsubmittedData(total)  
   }

   function handleDelete(){
    if (deleteId >= 0) {
      let total = [...submitteddata]
          total.splice(deleteId,1)
          setsubmittedData(total)
    }
    setShow(false)
   }
   
   const editData = (i) => {
    // console.log("dsdsd", i);
    
      setformData(submitteddata[i])
      setudateButton(true)
      setEditIndex(i)
   }

   const handleUpdate = () =>{
  
    // submitteddata.splice(editIndex, 1)
    // setsubmittedData([...submitteddata])
    // setformData(editIndex,1)
     submitteddata[editIndex] = formdata
    // console.log("update",a)
    // setformData(submitteddata[i])
  

    setudateButton(false)
    console.log("eee", setformData)
   }
  //  console.log("aaa", submitteddata[i])
  //  console.log("aaa",setsubmittedData)
  return (
    <>
    <div>
      <div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delet Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are You Want To Sure Delet Your Data!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="primary" onClick={handleDelete}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>

      </div>

       <form onSubmit={handleSubmit}>
        
            <div className="mb-3">
              <label htmlFor="fname" className="">Enter Your Name</label>
              <input type="text" name='fname' id='fname' value={formdata.fname} className="form-control" onChange={data} />
              {formdata.fname === "" ? error && <span style={{color:"red"}}>Please enter your name</span> : !error || ""}
            </div>
            {/* fname jo null hoy true thay to undar error print thase, nahi to else ma jashe */}
        
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Enter Your Email address</label>
              <input type="email" name='email' id='email' value={formdata.email} className="form-control" onChange={data}/>
              {formdata.email === "" ? error && <span style={{color:"red"}}>Please enter your email</span> : !error || ""}
            </div>

            <div className="mb-3">
              <label htmlFor="mobno" className="form-label">Enter Your Mobile Number</label>
              <input type="number" name='mobno' id='mobno' value={formdata.mobno} className="form-control" onChange={data} />
              {formdata.mobno?.length !== 10 ? error && <span style={{color:"red"}}>Mobile number must be atleast 10 number</span> : !error || ""}
            </div>

            <label htmlFor="select" className="form-label">Select Your Standard</label>
            <select className="form-select" aria-label="Default select example" id='standard' name='standard' value={formdata.standard} onChange={data}>
              <option value="" selected>- Select -</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>

              <p>
              {formdata.standard === "" ? error && <span style={{color:"red"}}>Mobile number must be atleast 10 number</span> : !error || ""}
              </p>

           {!updatebutton? <button type="submit" className="btn btn-primary my-3">Submit</button> :
            <button type="submit" className="btn btn-primary my-3" onClick={handleUpdate}>Update</button> }
      </form>
      <div>      
      </div>
    </div>
<div>
{
      <table>
        <tr>
            <th colSpan={6} ><h3>Submitted Data:</h3></th>
        </tr>
        <tr>
            <th>No.</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Mobileno</th>
            <th>Standard</th>
            <th>Action</th>
        </tr>
        {submitteddata.map((val,i)=>{
        return (
        <tr key={i}>
            <td>{i+1}</td>
            <td>{val.fname}</td>
            <td>{val.email}</td>
            <td>{val.mobno}</td>
            <td>{val.standard}</td>
            <td><button type="button" className="btn btn-primary" onClick={()=>editData(i)}>Edit</button> <button type="button" className="btn btn-danger" onClick={()=>deleteData(i)}>Delete</button></td>
        </tr>
          )
        })}
    </table>
       
}
</div>
    </>
  )
}
export default App