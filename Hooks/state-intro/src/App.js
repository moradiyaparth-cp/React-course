import React, { useState } from 'react'
import './App.css';

function App() {

  // const [count, setCount] = useState(0); 
  // 1. count name ni state che jeni initial value 0 che
  // 2. ane ek evu function setCount hoy je count ni initial value change kari shake



  
  const [counter, setCount] = useState(0)
  
  const addValue = () => {
    // console.log("Add value",counter);
    // counter = counter +1;
    if (counter < 20) {
      setCount(counter + 1);
    }
    else{
      alert("Value is greater than 20")
    }
  }

  const removeValue = () =>{
    if (counter > 0) {
      setCount(counter - 1) 
    }
    else{
      alert("Value is less than 0")
    }
  }
  return (
    <>
      {/* <div>The count is {count}</div> 
      <button onClick={()=>{setCount(count+1)}}>Update count</button> */}

      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> <br />
      <button onClick={removeValue}>Remove value</button>
      <div></div>
    </>
  );
}

export default App;
