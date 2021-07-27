import React, { createContext, useState, useEffect } from 'react'
import getTodos from '../api/getTodos'

const TodoContextProvider = createContext()

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getTodos()
      setTodos([...data])
    }
    getData()
  }, [])

  return (
    <TodoContextProvider.Provider value={todos}>
      {children}
    </TodoContextProvider.Provider>
  )
}

export default TodoContext
