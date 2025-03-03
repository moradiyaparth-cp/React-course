import React, { useState, useEffect } from "react";
import "./calc.css";

const Calc = () => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
 

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;
    if (total) 
    {
        setPreState("");
    }

    curState ? setCurState((pre) => pre + e.target.innerText) : setCurState(e.target.innerText)
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState || "0");
  }, [curState]);

  const operatorType = (e) => {
    setTotal(false);
    
    if (curState === "") return;
    if (preState !== "") {
      equals();
    }
        
      setOperator(e.target.innerText);
      setPreState(curState);
      setCurState("");

  };

  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showScientific, setShowScientific] = useState(false);

  const equals = (e) => {
    if(e?.target.innerText === "="){
      setTotal(true)
};
    let result;

    switch (operator) {
      case "/": 
          result = String(parseFloat(preState) / parseFloat(curState))
          break;

      case "X": 
          result = String(parseFloat(preState) * parseFloat(curState)) 
          break;

      case "+": 
          result = String(parseFloat(preState) + parseFloat(curState))
          break; 

      case "-": 
          result = String(parseFloat(preState) - parseFloat(curState))
          break;

      case "sin": 
          result = Math.sin(curState); 
          break;

      case "cos": 
          result = Math.cos(curState); 
          break;

      case "tan": 
          result = Math.tan(curState); 
          break;

      case "log": 
          result = Math.log10(curState); 
          break;

      case "ln": 
          result = Math.log(curState); 
          break;

      case "√": 
          result = Math.sqrt(curState); 
          break;

      case "^": 
          result = Math.pow(preState, curState); 
          break;

      case "π": 
          result = Math.PI; 
          break;

      case "e": 
          result = Math.E; 
          break;

      case "!": 
          result = factorial(curState); 
          break;

      default: 
          return;
    }

    setHistory([...history, `${preState} ${operator} ${curState} = ${result}`]);
    setPreState(result);
    setCurState(result);
    // console.log(result)
    // setTotal(true);
  };


  const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  const percent = () => {
    preState ? setCurState(String((parseFloat(curState) / 100) * preState)) :
    setCurState(String(parseFloat(curState) / 100));
}

  const del = () => {
    setCurState(curState.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="header">
        <span className="icon" onClick={() => setShowHistory(!showHistory)}><i className="fa-solid fa-clock-rotate-left"></i></span>
        <span className="icon" onClick={() => setShowScientific(!showScientific)}><i className="fa-solid fa-calculator"></i></span>
      </div>

   
      <div className="screen">{input}</div>

      {showHistory && (
        <div className="history-box">
          <h3>History</h3>
          {history.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}

      <div className="wrapper">
        {showScientific && (
          <>
            <button className="btn" onClick={operatorType}>sin</button>
            <button className="btn" onClick={operatorType}>cos</button>
            <button className="btn" onClick={operatorType}>tan</button>
            <button className="btn" onClick={operatorType}>log</button>
            <button className="btn" onClick={operatorType}>ln</button>
            <button className="btn" onClick={operatorType}>(</button>
            <button className="btn" onClick={operatorType}>)</button>
            <button className="btn" onClick={operatorType}>!</button>
            <button className="btn" onClick={operatorType}>^</button>
            <button className="btn" onClick={operatorType}>√</button>
            <button className="btn" onClick={operatorType}>π</button>
            <button className="btn" onClick={operatorType}>e</button>
          </>
        )}
        
        <button className="btn light-gray" onClick={reset}>AC</button>
        <button className="btn light-gray" onClick={percent}>%</button>
        <button className="btn light-gray" onClick={del}>⌫</button>
        <button className="btn orange" onClick={operatorType}>/</button>

        <button className="btn" onClick={inputNum}>7</button>
        <button className="btn" onClick={inputNum}>8</button>
        <button className="btn" onClick={inputNum}>9</button>
        <button className="btn orange" onClick={operatorType}>X</button>

        <button className="btn" onClick={inputNum}>4</button>
        <button className="btn" onClick={inputNum}>5</button>
        <button className="btn" onClick={inputNum}>6</button>
        <button className="btn orange" onClick={operatorType}>-</button>

        <button className="btn" onClick={inputNum}>1</button>
        <button className="btn" onClick={inputNum}>2</button>
        <button className="btn" onClick={inputNum}>3</button>
        <button className="btn orange" onClick={operatorType}>+</button>

        <button className="btn" onClick={inputNum}>00</button>
        <button className="btn" onClick={inputNum}>0</button>
        <button className="btn" onClick={inputNum}>.</button>
        <button className="btn orange" onClick={equals}>=</button>
      </div>
    </div>
  );
};

export default Calc;