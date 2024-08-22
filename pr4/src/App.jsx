import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fontFamily, setFontFamily] = useState('font-sans')
  return (
    <div className={`flex flex-col justify-center items-center h-screen bg-pink-500 w-full font-semibold ${fontFamily}`}>
    <div className='flex flex-col justify-center w-full items-center'>
      <div className='text-center flex flex-row items-center justify-center text-3xl text-white font-bold w-1/3 p-3 m-2'>
        <div className='m-2 w-2/3'>Count: {count}</div>
        <div className=' text-lg w-1/3 text-black '>
          <select className=' bg-neutral-300 py-2 px-1 rounded-lg border-2 border-black' onChange={(e)=>setFontFamily(e.target.value)}>
            <option value="">Select Font</option>
            <option value="font-sans">Sans</option>
            <option value="font-serif">Serif</option>
            <option value="font-mono">mono</option>
          </select>
        </div>
      </div>
      <div className=' flex flex-row w-1/2 items-center justify-center'>
        <button className='p-2 mx-1 my-2 border-2 bg-neutral-200 text-black border-black text-lg rounded-xl w-1/4' onClick={() => setCount(0)}>Reset</button>
        <button className='p-2 mx-1 my-2 border-2 bg-neutral-200 text-black text-lg border-black rounded-xl w-1/4' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='p-2 mx-1 my-2 border-2 bg-neutral-200 border-black text-lg text-black rounded-xl w-1/4' onClick={() => count>0?setCount(count - 1):null}>Decrement</button>
        <button className='p-2 mx-1 my-2 border-2 bg-neutral-200 text-xl border-black rounded-xl w-1/4' onClick={() => setCount(count + 5)}>Increment 5</button>
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
