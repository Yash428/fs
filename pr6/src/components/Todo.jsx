import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../store/todoSlice';

function Todo({
    id,
    text,
    className,
    ...props
}) {
    const dispatch = useDispatch()
    const [isUpdate, setIsUpdate] = useState(false)
    const [todo, setTodo] = useState(text)
    const handleRemove = () => {
        dispatch(removeTodo(id))
    }

    const handleEdit = () => {
        setIsUpdate(!isUpdate)
    }

    const handleSave = () => {
        console.log(todo);
        dispatch(updateTodo({id, text:todo}))
        setIsUpdate(!isUpdate)
    }

    return (
        <div id={id} className='flex flex-row items-center justify-center w-full'>
            {
                isUpdate?(
                    <input value={todo} onChange={e=>setTodo(e.target.value)} className={`rounded-l-lg p-2 bg-purple-700 w-1/3 text-white ${className}`} />
                )
                :(
                    <div className={`rounded-l-lg p-2 bg-purple-700 w-1/3 text-white ${className}`}>{text}</div>
                )
            }
            
            <div className='flex flex-row items-center justify-center p-2 mx-2'>
                <div className='text-xl p-1 m-1' onClick={handleRemove}><MdDelete /></div>
                {isUpdate?<div className='text-xl p-1 m-1' onClick={handleSave}><FaSave /></div>:<div className='text-xl p-1 m-1' onClick={handleEdit}><FaRegEdit /></div>}
                
            </div>
        </div>
    )
}

export default Todo