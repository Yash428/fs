import React from 'react'
import {useSelector} from 'react-redux'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Todo from './Todo';

function AllTodos() {
  const todos = useSelector(state => state.todos)
  console.log(todos);
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {
          todos.map(todo => (
            <Todo key={todo.id} id={todo.id} text={todo.text} />
          ))
        }
    </div>
  )
}

export default AllTodos