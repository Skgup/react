import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return (
    <> 

    <h2>my new app</h2>
    </>
  )
}
const reactElement ={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'click me to visit google'
}
const AnotherElement =(
  <a href="https://google.com">click here</a>
)

const ReactElement =React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'cleck here',
  AnotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
ReactElement
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
  
//   </React.StrictMode>,
// )
