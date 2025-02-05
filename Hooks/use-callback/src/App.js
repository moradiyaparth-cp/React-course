import React, {useState, useCallback} from 'react'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // const getAdjective = () => {
  //     return "Another" + count
  //   }

  const getAdjective = useCallback(() => {
      return "Another" + count
    },[count])
  
  return (
    <>

    <Navbar adjective={"good"}  getAdjective={getAdjective}/>

    <div>
     <button onClick={() => setCount(((count) => count + 1))}>Count is {count}</button>
    </div>
    </>
  );
}

export default App;
