import React from "react";
import { CreateTodoBtn } from '../CreateTodoBtn';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';
import { TodosError } from "../TodosError"
import { TodosLoading } from "../TodosLoading"
import { EmptyTodos } from "../EmptyTodos"
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm"

function AppUI()
{
  const {
    completeTodo,
    deleteTodo,
    filteredTodos,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {loading && (
          <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
          </>
        )}
        {error && <TodosError/>}
        {(!loading && filteredTodos.length === 0) && <EmptyTodos/>}
      

        {filteredTodos.map(todo => (
          <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoBtn />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  )
}

export { AppUI }