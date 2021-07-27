import React, { useState, useContext } from 'react'
import TodoContext from '../context/TodoContext'
import axios from 'axios'

const InputTodo = () => {
  const [input, setInput] = useState('')

  const todos = useContext(TodoContext)
  console.log(todos)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:5000/todos', {
        description: input,
      })
      console.log(res)
    } catch (err) {
      console.error(err)
    }

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className='new-todo-form'>
      <input
        className='new-todo-input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
      />
      <button className='new-todo-submit'>Submit</button>
    </form>
  )
}

export default InputTodo
