import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-pink-500 w-full font-semibold'>
    <div className='flex flex-col justify-center w-full items-center'>
      <div className='text-center text-3xl text-white font-bold p-3 m-2'>Count: {count} </div>
      <div className=' flex flex-row w-1/2 items-center justify-center'>
        <button className='p-2 mx-1 my-2 border-2 bg-neutral-200 border-black rounded-xl w-1/4' onClick={() => setCount(0)}>Reset</button>
        <button className='p-2 mx-1 my-2 border-2 bg-neutral-200 border-black rounded-xl w-1/4' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='p-2 mx-1 my-2 border-2 bg-neutral-200 border-black rounded-xl w-1/4' onClick={() => setCount(count - 1)}>Decrement</button>
        <button className='p-2 mx-1 my-2 border-2 bg-neutral-200 border-black rounded-xl w-1/4' onClick={() => setCount(count + 5)}>Increment 5</button>
      </div>
    </div>
    <div className='flex flex-col p-2 m-1 items-center justify-center'>
      <div className='flex flex-col p-2 m-1 items-center justify-center'>
        <div className='flex flex-row p-2 m-1 justify-center items-center'>First Name: <input type="text" className='border-2 mx-2 px-2 py-1 border-black rounded-lg ' onChange={e=>setFirstName(e.target.value)}  /></div>
        <div className='flex flex-row p-2 m-1 justify-center items-center'>Last Name:  <input type="text" className='border-2 mx-2 px-2 py-1 border-black rounded-lg ' onChange={e=>setLastName(e.target.value)} /></div>
      </div>
      <div className='flex flex-col p-2 m-1 items-center justify-center'>
        <div className='flex flex-row m-1 items-center justify-center'>
          <div className='p-1 mx-2'>Fisrt Name: </div>
          <div>{firstName}</div>
        </div>
        <div className='flex flex-row m-1 items-center justify-center'>
          <div className='p-1 mx-2'>Last Name:</div>
          <div>{lastName}</div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default App
