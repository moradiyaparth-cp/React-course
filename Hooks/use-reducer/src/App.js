import { act, useReducer } from 'react'
import './App.css';

const initialState = {
  firstCounter : 0,
  secondCounter : 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {...state,firstCounter: state.firstCounter + action.value};  

    case 'decrease':
      return {...state,firstCounter: state.firstCounter - action.value};

    case 'increaseTwo':
      return {...state,secondCounter: state.secondCounter + action.value};  

    case 'decreaseTwo':
      return {...state,secondCounter: state.secondCounter - action.value};

    case 'reset':
      return initialState;

    default :
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h3>{state.firstCounter}</h3>
      <h3>{state.secondCounter}</h3>
        <button onClick={() => dispatch({type: 'increase', value: 5})}>Increase Counter</button> <br/>
        <button onClick={() => dispatch({type: 'decrease', value: 5})}>Decrease Counter</button> <br/>
        <button onClick={() => dispatch({type: 'increaseTwo', value: 10})}>Increase Counter Two</button> <br/>
        <button onClick={() => dispatch({type: 'decreaseTwo', value: 10})}>Decrease Counter Two</button> <br/>
        <button onClick={() => dispatch({type: 'reset'})}>Reset Counter</button>
    </div>
  );
}

export default App;
