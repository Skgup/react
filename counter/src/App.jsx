import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]= useState(5)
  // let counter =5;
  const addvalue=()=>{
    counter=counter+1
setCounter(counter)
  }
const removevalue=()=>{
  counter=counter-1
setCounter(counter)
}
  return (
    <>
    
      <h1>chay aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
     
    </>
  )
}

export default App
