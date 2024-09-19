import { useState } from 'react'
import './App.css'
import { HiOutlineBars3 } from "react-icons/hi2";
import {Link, Outlet} from 'react-router-dom'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=' flex flex-row w-full h-screen'>
      <div className='flex flex-col '>
        <div className='text-3xl p-2 bg-orange-500 text-white' onClick={e=>setIsOpen(!isOpen)}>
          <HiOutlineBars3 />
        </div>
        {isOpen ?
          <div className='flex flex-col items-center justify-start bg-yellow-300 text-xl text-orange-600 w-36 h-screen p-2'>
            <div className=' p-2 hover:text-yellow-300 hover:bg-orange-600 w-full text-center'><Link to='/'>Home</Link></div>
            <div className='p-2 hover:text-yellow-300 hover:bg-orange-600  w-full text-center'><Link to='/cspit'>Cspit</Link></div>
            <div className='p-2 hover:text-yellow-300 hover:bg-orange-600  w-full text-center'><Link to='/depstar'>Depstar</Link></div>
          </div>
        :null}
      </div>
  
      <div className='flex flex-row items-center justify-center w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
