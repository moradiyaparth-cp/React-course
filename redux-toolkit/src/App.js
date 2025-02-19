import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterslice';
import { useState } from 'react';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0)

  function handleIncrementClick(){
    dispatch(increment())
  }

  function handleDecrementClick(){
    dispatch(decrement())
  }

  function handleResetClick(){
    dispatch(reset())
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <div className='container'> 
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button> <br /> <br />
        <button onClick={handleResetClick}> Reset </button> <br /> <br />
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/><br /> <br />
        <button onClick={handleIncAmountClick}> Inc By Amount </button> 
    </div>
  );
}

export default App;
