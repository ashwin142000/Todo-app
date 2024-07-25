import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice';

function AddTodo() {
    const [input,setInput]=useState('');
    const dispatch = useDispatch()

    function addTodoHandler(e){
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler}>
        <label>Task: </label>
        <input value={input} type="text" onChange={(e)=>setInput(e.target.value)} />
        <button>Add</button>
    </form>
  )
}

export default AddTodo
