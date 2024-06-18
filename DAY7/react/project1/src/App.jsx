// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Name from './Components/Name'
import Calculator from './Components/Calculator'
import Greetings from './Components/Greetings'
const App = ()=> {
  let auth = true;
  return (
    <>
     
     {/* {auth?<><Name name = "Neel Dobariya"/>
      <Greetings/></>:null} */}
      {auth &&(
        <><Name name = "Neel Dobariya"/>
      <Greetings/></>
      )}

      <h4>This is a react app</h4>
      <Calculator a = "10" b = "20"/>
      
    </>
  )}
  
//2 ways it can be done

//({a,b})

export default App
