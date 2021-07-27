import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Todo from './Todo'
import getTodos from '../api/getTodos'

const AllTodos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getTodos()
      setTodos([...data])
    }
    getData()
  }, [])

  const renderedTodos = todos.map(({ todo_id: id, description }) => {
    return <Todo key={id} id={id} description={description} />
  })

  console.log(todos)

  return <div>{renderedTodos}</div>
}

export default AllTodos
