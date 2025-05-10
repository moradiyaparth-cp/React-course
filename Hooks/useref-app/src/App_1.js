import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rerendring and value of a is ${a.current}`)
  })
  
 
  return (
    <>
      <div>The count is {count}</div> 
      <button onClick={()=>{setCount(count+1)}}>Update count</button>

    </>
  );
}

export default App;