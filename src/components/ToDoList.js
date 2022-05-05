import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos, toggleTodo }) => {
    return (
        <>

            <ul className='task-list'>

                <ToDoItem  />


            </ul>

        </>
    )
}

export default ToDoList