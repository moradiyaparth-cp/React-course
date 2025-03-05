import React, { useState, useEffect } from "react";
import "./calc.css";

const Calc = () => {
  const [expression, setExpression] = useState("");
  const [curState, setCurState] = useState("");
  const [result, setResult] = useState("0");
  const [operations, setOperations] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showScientific, setShowScientific] = useState(false);


  const inputNum = (e) => {
    const value = e.target.innerText;
    if (value === "." && curState.includes(".")) return;
    // console.log(value)
    setCurState(curState + value);
    setExpression(expression + value);
    // console.log("ex: ",expression + value)
  };

 
  useEffect(() => {
    setResult(curState || "0");
  }, [curState]);

 
  const operatorType = (e) => {
    if (!curState) return;
    const op = e.target.innerText;
    // console.log("operator: ",op)
    setOperations([...operations, parseFloat(curState), op]);
    // console.log(operations)
    setExpression(expression + op);
    setCurState("");
  };


  const calculate = () => {
    if (!operations.length || !curState) return;
    const allOps = [...operations, parseFloat(curState)];
    // console.log(allOps) + - * / e badhu store karshe sathe value pn
    let total = allOps[0]; // Start karshe first number thi

    for (let i = 1; i < allOps.length; i += 2) {
      const op = allOps[i];
      const num = allOps[i + 1];
      // console.log("num",num)
      if (op === "+"){
        total += num
      }
      if (op === "-"){
        total -= num
      }
      if (op === "X"){
        total *= num
      }
      if (op === "/"){
        total /= num
      }
    }
    // console.log("total",total)
    return total;
  };

  
  const equals = () => {
    if (!expression) return;
    const finalResult = calculate();
    // console.log("fres: ", finalResult)
    if (finalResult !== undefined) {
      setHistory([...history, `${expression} = ${finalResult}`]);
      setExpression(String(finalResult));
      setResult(String(finalResult));
      setCurState("");
      setOperations([]);
    }
  };


  const scientificCalc = (operation) => {
    if (!curState) return;
    
    const num = parseFloat(curState);
    let calcResult;
    
    if (operation === "sin") {
      calcResult = Math.sin(num)
    }

    else if (operation === "cos") {
      calcResult = Math.cos(num)
    }
    else if (operation === "tan") {
      calcResult = Math.tan(num)
    }
    else if (operation === "log") {
      if (num <= 0) return;
      calcResult = Math.log10(num);
    }
    else if (operation === "ln") {
      if (num <= 0) return;
      calcResult = Math.log(num);
    }
    else if (operation === "√") {
      if (num < 0) return;
      calcResult = Math.sqrt(num);
    }
    else if (operation === "sqr") {
      calcResult = num * num
    }
    else if (operation === "π") {
      calcResult = Math.PI
    }
    else if (operation === "e") {
      calcResult = Math.E
    }
    else if (operation === "!") {
      calcResult = factorial(num)
    }

    if (calcResult !== undefined) {
      const newExpr = `${operation}(${curState}) = ${calcResult}`;
      setExpression(newExpr);
      setCurState(String(calcResult));
      setHistory([...history, newExpr]);
    }
  };


  const factorial = (n) => {
    n = Math.floor(n);
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

 
  const reset = () => {
    setExpression("");
    setCurState("");
    setResult("0");
    setOperations([]);
  };

 
  const percent = () => {
    if (!curState) return;
    const percentVal = parseFloat(curState) / 100;
    setCurState(String(percentVal));
    setExpression(expression.slice(0, -curState.length) + percentVal);
  };

 
  const del = () => {
    if (curState) {
      setCurState(curState.slice(0, -1));
      setExpression(expression.slice(0, -1));
    }
  };

  return (
    <div className="container">
      <div className="header">
        <span className="icon" onClick={() => setShowHistory(!showHistory)}><i className="fa-solid fa-clock-rotate-left"></i></span>
        <span className="icon" onClick={() => setShowScientific(!showScientific)}><i className="fa-solid fa-calculator"></i></span>
      </div>

      <div className="screen">{expression || result}</div>

      {showHistory && (
        <div className="history-box">
          <h3>History</h3>
          {history.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}

      <div className="wrapper">
        {showScientific ? (
          <>
            <div className="scientific-row">
              <button className="btn" onClick={() => scientificCalc("sin")}>sin</button>
              <button className="btn" onClick={() => scientificCalc("cos")}>cos</button>
              <button className="btn" onClick={() => scientificCalc("tan")}>tan</button>
              <button className="btn" onClick={() => scientificCalc("log")}>log</button>
              <button className="btn" onClick={() => scientificCalc("ln")}>ln</button>
            </div>
            <div className="scientific-row">
              <button className="btn" onClick={() => scientificCalc("!")}>!</button>
              <button className="btn" onClick={() => scientificCalc("sqr")}>x²</button>
              <button className="btn" onClick={() => scientificCalc("√")}>√</button>
              <button className="btn" onClick={() => scientificCalc("π")}>π</button>
              <button className="btn" onClick={() => scientificCalc("e")}>e</button>
            </div>
            
            <div className="main-buttons">
              <button className="btn light-gray" onClick={reset}>AC</button>
              <button className="btn light-gray" onClick={percent}>%</button>
              <button className="btn light-gray" onClick={del}>DEL</button>
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
          </>
        ) : (
          <div className="main-buttons">
            <button className="btn light-gray" onClick={reset}>AC</button>
            <button className="btn light-gray" onClick={percent}>%</button>
            <button className="btn light-gray" onClick={del}>DEL</button>
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
        )}
      </div>
    </div>
  );
};

export default Calc;