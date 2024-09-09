import React, { useState } from 'react'
import {addTodo} from '../store/todoSlice.js'
import {useDispatch} from  'react-redux';


function AddTodo() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    console.log(todo);
    dispatch(addTodo(todo))
  }

  return (
    <div className='m-3 p-2 w-1/2 flex flex-row h-16 items-center justify-center'>
      <div className="flex rounded-lg shadow-sm">
        <input type="text" className="py-3 px-4 block bg-neutral-950 w-full border-2 border-purple-700 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-purple-500 focus:ring-purple-500" value={todo} onChange={e=>setTodo(e.target.value)} />
        <button  type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}

export default AddTodo