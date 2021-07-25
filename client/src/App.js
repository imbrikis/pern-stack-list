import React, { useState } from 'react'

const App = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([
      ...list,
      { id: Math.floor(Math.random() * 100000), content: input },
    ])
    setInput('')
  }

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
    <div>
      <h1>The Best List in the World!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Add Item:{' '}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
          />
        </label>
      </form>
      <ul>{renderedList}</ul>
    </div>
  )
}

export default App
