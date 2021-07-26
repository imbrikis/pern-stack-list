import React, { useState } from 'react'

const InputTodo = () => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // setList([
    //   ...list,
    //   { id: Math.floor(Math.random() * 100000), content: input },
    // ])
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
