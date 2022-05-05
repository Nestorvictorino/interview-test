import React from 'react'

const ToDoItem = ({ todo, toggleTodo }) => {
  const { id, task, completed } = todo;
  const handleTodoClick = () => {
    toggleTodo(id)
}

  return (
    <li className='task-list__item'>
      <input type="checkbox" onChange={handleTodoClick} checked={completed} />
      {task}
    </li>
  )
}

export default ToDoItem