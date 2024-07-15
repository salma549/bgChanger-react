import {useState} from 'react'

const App = () => {

  const [bgColor, setBgColor] = useState("gray")




  return (
    <>
      <div className='w-full duration-200 h-screen' style={{backgroundColor: bgColor }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-md px-3 py-2'>
            <button onClick={()=>setBgColor("red")} className='outline-none px-4 rounded-md shadow-lg' style={{backgroundColor : "red"}}>Red</button>
            <button onClick={()=>setBgColor("pink")} className='outline-none px-4 rounded-md shadow-lg' style={{backgroundColor : "pink"}}>Pink</button>
            <button onClick={()=>setBgColor("green")} className='outline-none px-4 rounded-md shadow-lg' style={{backgroundColor : "green"}}>green</button>
            <button onClick={()=>setBgColor("blue")} className='outline-none px-4 rounded-md shadow-lg' style={{backgroundColor : "blue"}}>Blue</button>
            <button onClick={()=>setBgColor("orange")} className='outline-none px-4 rounded-md shadow-lg' style={{backgroundColor : "orange"}}>Orange</button>
            <button onClick={()=>setBgColor("purple")} className='outline-none px-4 rounded-md shadow-lg' style={{backgroundColor : "purple"}}>Purple</button>
            <button onClick={()=>setBgColor("yellow")} className='outline-none px-4 rounded-md shadow-lg' style={{backgroundColor : "yellow"}}>Yellow</button>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
