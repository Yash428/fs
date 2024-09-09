import { useState } from 'react'
import AllTodos from './components/AllTodos'
import AddTodo from './components/AddTodo'


function App() {
  return (
    <div className='bg-neutral-950 flex flex-col items-center p-2 text-white w-full h-screen'>
    <div className='p-3 text-2xl font-semibold'>Todo List by 22DCS085</div>
      <AllTodos />
      <AddTodo />
    </div>
  )
}

export default App
