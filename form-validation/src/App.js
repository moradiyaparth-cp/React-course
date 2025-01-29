import React, {useState} from 'react'
import './App.css'
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

  const nameValue = (e) =>{
    setformData({...formdata, [e.target.name]: e.target.value})
  }
  // console.log("eee",formdata.fname)

  const emailValue = (e) =>{
    setformData({...formdata, [e.target.name]: e.target.value})
  }
  // console.log("eee",formdata.email)

  const mobnoValue = (e) =>{
    setformData({...formdata, [e.target.name]: e.target.value})
  }

  const stdValue = (e) =>{
    setformData({...formdata, [e.target.name]: e.target.value})
  }
  // console.log("eee",formdata.standard)


  const handleSubmit = (e) =>{
    e.preventDefault()
    if(formdata.fname === "" || formdata.email === "" || formdata.mobno.length !== 10 || formdata.standard === ""){
      setError(true)
      
  
    }
   
    else{
      submitteddata.push(formdata);
      setstoreValue([{submitteddata} , ...storevalue] )
    }
    setformData({
      fname: "",
      email: "",
      mobno: "",
      standard: ""
    });
  }
  return (
    <>
    <div>
       <form onSubmit={handleSubmit}>
        
            <div className="mb-3">
              <label htmlFor="fname" className="">Enter Your Name</label>
              <input type="text" name='fname' id='fname' value={formdata.fname} className="form-control" onChange={nameValue} />
              {formdata.fname == "" ? error && <span style={{color:"red"}}>Please enter your name</span> : !error || ""}
            </div>
            {/* fname jo null hoy true thay to undar error print thase, nahi to else ma jashe */}
        

    
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Enter Your Email address</label>
              <input type="email" name='email' id='email' value={formdata.email} className="form-control" onChange={emailValue}/>
              {formdata.email == "" ? error && <span style={{color:"red"}}>Please enter your email</span> : !error || ""}
            </div>

            <div className="mb-3">
              <label htmlFor="mobno" className="form-label">Enter Your Mobile Number</label>
              <input type="number" name='mobno' id='mobno' value={formdata.mobno} className="form-control" onChange={mobnoValue} />
              {formdata.mobno.length !== 10 ? error && <span style={{color:"red"}}>Mobile number must be atleast 10 number</span> : !error || ""}
            </div>

            <select className="form-select" aria-label="Default select example" id='standard' name='standard' value={formdata.standard} onChange={stdValue}>
              <option value="" selected>Select Your Standard</option>
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

            <button type="submit" className="btn btn-primary my-3">Submit</button>
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
            <th>Fullname</th>
            <th>Email</th>
            <th>Mobileno</th>
            <th>Standard</th>
            <th>Action</th>
        </tr>
        {submitteddata.map((val, i)=>{
        return (
        <tr key={i}>
            <td>{val.fname}</td>
            <td>{val.email}</td>
            <td>{val.mobno}</td>
            <td>{val.standard}</td>
            <td><button type="button" class="btn btn-primary">Edit</button> <button type="button" class="btn btn-danger">Delete</button></td>
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