import React from 'react'
import {useSelector} from 'react-redux'

function AllTodos() {
    const todos = useSelector(state => state.todos)
    console.log(todos);
  return (
    <div>AllTodos
    <div>
        {todos.map(todo => (
      <div key={todo.id}>{todo.text}</div>
    ))}
    </div>
    </div>
  )
}

export default AllTodos