import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      <Component1/>
      <Component1/>
    </>
  )
}

export default App

const Component1 = () => {
  const [count, setCount] = useState(0)
  let myTag = <h1>sdfsfsdffsdf</h1>
  let obj = {name : "neel", lname: "dobariya",contact: "12314212",isauthorised:false};
 const fullname = () => {
  return obj.name + " " + obj.lname;
 }
  return (
    <>
    <div style={{backgroundColor:"red",maxWidth:"500px"}}>
    <h1>{obj.name}</h1>
      <h1>{print()}</h1>
      <h1>{fullname()}</h1>
      <h1>{obj.isauthorised? "yes" : "no"}</h1>
      <h1>Neel Dobariya</h1>
      <h1>XYZ</h1>
    </div>
    </>
  )
}