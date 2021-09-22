
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    const handleCopy = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
    }
    const handleExtraSpaces = () => {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("The extra spaces have been removed","success")
    }
    const handleClearText = () => {
     let newText = " ";
     setText(newText);
     props.showAlert("The text has been cleared ","success")
    }
    const handleOnChange = (event) => {
        console.log("On change ");
        setText(event.target.value)
        
    }

    // eslint-disable-next-line
    const [text, setText] = useState("Enter text here");
    return ( <>
        <div className = "container" style={{color:props.mode==="dark"?"white":"black"}}>

        <h1> { props.heading } </h1> 
        <div className = "mb-3" >
       <textarea className = "form-control"
        id = "myBox"
        rows = "8"
        value = { text }
        onChange = { handleOnChange } 
        style={{backgroundColor:props.mode==="dark"?"grey":"white",
        color:props.mode==="dark"?"white":"black"}}>
        </textarea> 
         </div> 
          <button className = "btn btn-primary mx-1"
        onClick = { handleUpClick } > Convert To Uppercase </button> 

        <button className = "btn btn-primary mx-1"
        onClick = { handleLoClick } > Convert To Lowercase </button> 
        <button className = "btn btn-primary mx-1"
        onClick = { handleCopy} > Copy Text </button> 
        <button className = "btn btn-primary mx-1"
        onClick = { handleExtraSpaces} > Remove extra Spaces </button> 
        <button className = "btn btn-primary mx-1"
        onClick = { handleClearText} > Clear Text  </button> 
         </div>
          <div className = "container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2 > Your Text summary </h2>
         <p> { text.split(" ").length }
        words and { text.length }
        Characters </p>
         <p > { 0.008 * text.split(" ").length }
        Minutes read 
        </p> 
        <h2 > Preview </h2>
         <p> {text.length>0?text:"Enter text above to preview here" } </p> 
        </div>

        </>

    )
}
//update the state using the settext func