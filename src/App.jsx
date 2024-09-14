import React from 'react'
import Button from './Button'
function App() {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh] bg-slate-800">
      <div className="flex justify-center items-center bg-slate-400 p-2 rounded-lg ">
      
      <div className="flex flex-col justify-center items-center gap-1">
      <img className='w-[100px] h-[100px] rounded-full' src="./src/assets/mypic.jpg" alt="img" />
        <Button/>
        </div>
      <div className="profile px-2 uppercase">
        <h1 className='text-3xl font-bold'>saiful islam</h1>
        <h2 className='font-semibold '>frontent developer</h2>
        <p className='lowercase pb-2  '>saifulislam897722@gmail.com </p>
        
      </div>
      </div>
    </div>
  )
}

export default App