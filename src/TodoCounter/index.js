import "./TodoCounter.css"
import React from 'react'
import { TodoContext } from "../TodoContext"

function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total,
    loading
  } = React.useContext(TodoContext)

  if (loading) {
    return (
      <h1 className='TodoCounter'>
      Por favor espera..
      </h1>
    )
  } else {
    return (

      total == completed ?
  
      <h1 className='TodoCounter'>
        Ya no tienes que hacer
      </h1>
  
      :
  
      <h1 className='TodoCounter'>
        Has completado <span>{completed}</span> de <span>{total}</span> ToDos
      </h1>
    )
  }

  
}

export { TodoCounter }