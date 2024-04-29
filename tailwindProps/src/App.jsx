import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myobj ={
    username :"sumit",
    age:22
  }

  return (
    <>
<Card n="Sumit" btnc="click me" />
<Card n="Prasant" btnc="open" />
<Card n="Ujjwal" btnc="visit"/>
    </>
  )
}

export default App
