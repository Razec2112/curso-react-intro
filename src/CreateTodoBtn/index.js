import { TodoContext } from "../TodoContext";
import React from 'react'
import "./CreateTodoBtn.css";

function CreateTodoBtn() {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <button 
      className='CreateTodoBtn' 
      onClick={
        (event) => {
          console.log("hiciste click")
          console.log(event)
          console.log(event.target)
          
          setOpenModal(!openModal)
        }
      }
    >+</button>
  )
}

export {CreateTodoBtn}