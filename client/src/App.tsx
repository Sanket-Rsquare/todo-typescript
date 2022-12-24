import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Avatar from './components/Avatar'
import AddForm from './components/AddForm'
import DashBoard from './components/DashBoard'

function App() {

  return (
    <div className="flex min-w-screen h-screen  max-w-[1600px] mx-auto shadow-md">
      {/* content */}
      <div className='h-full overflow-y-auto content-box  w-[calc(100%-30%)]  bg-[#111]'>
       <DashBoard/>
      </div>
      {/* form */}
      <div className='w-[30%] bg-[#151515]'>
        {/* profile */}
        <Avatar name={"Sanket Gawande"} />
        
        <AddForm/>
      </div>
    </div>
  )
}

export default App
