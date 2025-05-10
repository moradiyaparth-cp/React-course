import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const btnref = useRef(0)

  useEffect(() => {
    console.log(`First rendring `)
    btnref.current.style.backgroundColor= "skyblue"
  },[])
  
 
  return (
    <>
      <div>The count is {count}</div> 
      <button ref={btnref} onClick={()=>{setCount(count+1)}}>Update count</button> <br/>
      <button onClick={()=>{btnref.current.style.display = "none"}}>Chane me</button>
    </>
  );
}

export default App;