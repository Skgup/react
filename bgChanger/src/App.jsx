import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-xl px-4 py-3">
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}
            >Blue</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"magenta"}} onClick={()=>setColor("magenta")} >Magenta</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl text-white" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
            <button className="outline-none px-3 py-2 rounded-full text-center shadow-xl" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button>

          </div></div>
      </div>
    </>
  )
}

export default App
