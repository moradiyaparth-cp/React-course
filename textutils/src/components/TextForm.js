import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () =>{
        // console.log("Uppercase click" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () =>{
        // console.log("Uppercase click" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = () =>{
        // console.log("Uppercase click" + text)
        let newText = '';
        setText(newText);
        props.showAlert("Clear text", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("Onchange");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        // var text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copy to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces to text", "success");
    }

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}} >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
