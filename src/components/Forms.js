import React, {useState} from 'react'


export default function Forms(props) {
    const handleUpClick = () => {
        console.log("Upper Case Button clicked");
        let new_text=text.toUpperCase();
        setText(new_text)
        
    }
    const handleLwClick = () => {
      console.log("Lower Case Button clicked");
      let new_text=text.toLowerCase();
      setText(new_text)
      
    }
    // const handleTaskClick = () => {
    //   console.log("Task Button clicked");
    //   var new_text;
    //   if(text.length===text1.length){
    //     new_text="Length of both text field are same";
    //     setText1(new_text)

    //   }
    //   else{
    //     new_text="Length of both text field are not same"
    //     setText1(new_text)
    //   }
    //   setText(new_text)
      
    // }
    const handleCopy = () =>{
      document.getElementById("myBox1");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleOnChange1 = (changeValue) => {
        console.log("On Change");
        setText(changeValue.target.value)
    }
  //   const handleOnChange2 = (changeValue1) => {
  //     console.log("On Change2");
  //     setText1(changeValue1.target.value)
  // }
    let [text,setText]=useState("")
    // let [text1,setText1]=useState("")
  return (
    <>
    <div>
      <h3 style={{color: props.mode ==='light'? 'black' : 'white'}}>{props.tital_1}</h3>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange1} style={{backgroundColor: props.mode ==='dark'? 'grey' : 'white',color: props.mode ==='light'? 'black' : 'white'}}  id="myBox1" rows="8"></textarea>
      </div>
      {/* <h3>{props.tital_2}</h3>
      <div className="mb-3">
        <textarea class="form-control " value={text1} onChange={handleOnChange2} id="myBox2" rows="8"></textarea>
      </div> */}
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to Lower Case</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleTaskClick}>Check text length both fields</button> */}
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
    </div>
    <div className='container my-3' style={{color: props.mode ==='light'? 'black' : 'white'}}>
      Total number of words is: {text.split(" ").length} and total number of Chracters is: {text.length}
      <div className='my-3' style={{color: props.mode ==='light'? 'black' : 'white'}}>
      You can read this text with in {(text.split(" ").length)/125}
      </div>
      <h3 className='my-3' style={{color: props.mode ==='light'? 'black' : 'white'}}>Preview</h3>
      <div >
      {text}
      </div>
      {/* <div className='my-3'>
        {text1}
      </div> */}
    </div>
    </>
  )
}
