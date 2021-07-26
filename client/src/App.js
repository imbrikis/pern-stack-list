import React, { useState } from 'react'
import InputTodo from './InputTodo'

const App = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const handleDelete = (id) => {
    const tempList = list.filter((item) => item.id !== id)
    setList([...tempList])
  }

  const renderedList = list.map(({ id, content }) => {
    return (
      <li key={id}>
        <span>{content}</span>{' '}
        <span
          onClick={() => handleDelete(id)}
          style={{ border: '1px solid black' }}
        >
          Delete
        </span>
      </li>
    )
  })

  return (
    <div className='app_container'>
      <h1>Super Awesome List</h1>
      <InputTodo />
      <ul>{renderedList}</ul>
    </div>
  )
}

export default App
