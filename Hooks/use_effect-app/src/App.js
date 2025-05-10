import './App.css';
import {useEffect, useState} from 'react'
import Navbar from './components/Navbar';

function App() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);


  useEffect(() => {
    alert("Count was changed");
    setColor(color + 1)
  }, [count])

  
  
  return (
    <>
    <Navbar color={"navy " + "blue" + color}/>
      <div>count is {count}</div>
      <button onClick={()=>{setCount(count + 1)}}>Update count</button>
     </>
  );
}

export default App;
