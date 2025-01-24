import './App.css';
import React, { useState, useCallback, useEffect, useRef} from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789" // number allowed che yes hoy to str ma je che ama number add kari dyo
    if (charAllowed) str += "!@#$%^&*-_=+[]{}~`" // character allowed che yes hoy to str ma je che ama character add kari dyo

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(); // select thay tyare highlight karva and user ne khbr pade select thayu 
    window.navigator.clipboard.writeText(password)
  }, [password])  // only password sathe j dependancy che etle k password update thay k no thay copy karva mate password pr j depend che

 useEffect(() => {
  passwordGenerator()
 }, [length, numberAllowed, charAllowed, passwordGenerator])
 

  return (
    <>
      <div className="App">
        <h1>Password Generator</h1>
        <div>
          <input 
          type='text'
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef}
          />

        <button onClick={copyPassword}>Copy</button>

        </div>

          <div>
            <input type="range" 
            min={6} 
            max={100} 
            value={length}
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>

          <div>
            <input type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label>Numbers</label>
          </div>

          <div>
            <input type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label>Characters</label>
          </div>

      </div>
    </>
  );
}

export default App;
