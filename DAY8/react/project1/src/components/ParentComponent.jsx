import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [name,setName] = useState("username");
    const changeNameHandler = () =>{
        setName("Neel Dobariya");
    }
  return (
    <>
    <div>Inside the Parent Component</div>
    <h1>Name: {name}</h1>
    {/* <button onClick={changeNameHandler}>Change the name</button> */}
    <ChildComponent onNameChange = {changeNameHandler}/>
    </>
  )
}

export default ParentComponent