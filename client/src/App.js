import React from 'react'
import AllTodos from './components/AllTodos'
import InputTodo from './components/InputTodo'
import TodoContext from './context/TodoContext'

const App = () => {
  return (
    <div className='app_container'>
      <TodoContext.Consumer>
        <h1>Super Awesome List</h1>
        <InputTodo />
        <div className='hr'></div>
        <AllTodos />
      </TodoContext.Consumer>
    </div>
  )
}

export default App
