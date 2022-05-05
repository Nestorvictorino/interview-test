import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos, toggleTodo }) => {
    return (
        <>

            <ul className='task-list'>
                {todos.map((todo) => {
                    return (
                        <ToDoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
                    )
                })}
            </ul>

        </>
    )
}

export default ToDoList