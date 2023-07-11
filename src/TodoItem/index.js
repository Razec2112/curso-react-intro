import { CompleteIcon} from "../TodoIcon/CompleteIcon"
import { DeleteIcon} from "../TodoIcon/DeleteIcon"
import "./TodoItem.css";
import React from 'react'

function TodoItem({
  text,
  completed,
  onComplete,
  onDelete,
}) {
  console.log (completed)
  return (
    <li className='TodoItem'>
      <CompleteIcon 
        completed = {completed}
        onComplete = {onComplete}
      />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      <DeleteIcon 
        onDelete = {onDelete}
      />
    </li>
  )
}

export {TodoItem}