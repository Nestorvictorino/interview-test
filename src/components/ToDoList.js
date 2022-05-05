import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos, toggleTodo }) => {
    return (
        <>
            {
                todos.length === 0 ?
                    <div className='noTodoMsg'>
                        <span>
                            There's not to do,
                            type and add one!
                        </span>
                    </div>
                    :
                    <ul className='task-list'>
                        {todos.map((todo) => {
                            return (
                                <ToDoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
                            )
                        })}
                    </ul>
            }
        </>
    )
}

export default ToDoList