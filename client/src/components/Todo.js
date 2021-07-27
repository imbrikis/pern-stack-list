import React from 'react'

const Todo = ({ id, description }) => {
  return (
    <div>
      <h1>
        id: {id}, description: {description}
      </h1>
    </div>
  )
}

export default Todo
