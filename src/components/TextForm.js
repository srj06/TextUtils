 
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)


    }
    const handleOnChange = (event)=>{
        console.log(" On change"); 
        setText(event.target.value)
    }  

    const [text, setText] = useState('Kuch nahi bhai bs sikh raha hu');
    return(

        <div class="container" style={{color: props.mode=== 'dark'?'white':'#07312f'}}>
 <h1>{props.heading}</h1>
    <div class="mb-3">
 <textarea class="form-control" id="my Box" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white',color: props.mode=== 'dark'?'white':'black'}}rows="8"></textarea>
  </div>
  <button Class="btn btn-primary" onClick={handleUpClick}>convert to UpperCase</button>
  <div class="container my-3" style={{color: props.mode=== 'dark'?'white':'#07312f'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and{text.length} characters</p>
    <p>{0.08* text.split(" ").length} minutes read</p>  
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>

  </div>
 
</div>
        
    )
} 
