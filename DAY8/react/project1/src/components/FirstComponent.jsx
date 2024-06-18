import React from 'react'
import { useState } from 'react'
function FirstComponent() {
    const inputChangeHandler = (event) =>{
          // console.log("iNPUT",event);
          setText(event.target.value);
        }
        const[text,setText] = useState("Null");
  return (
    <>
     Enter your name <input onChange={inputChangeHandler}/>
    <br/>
    <p>{text}</p>
    </>
  )
}

export default FirstComponent