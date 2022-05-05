import { useReducer, useRef } from "react";
import "./App.css";
import reducer from "./reducer";
import ToDoList from './components/ToDoList';


function App() {
  const initialState = {
    items: [{ id: 1, task: "Task 1", completed: false }],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const todoTaskRef = useRef();
  const toggleTodo = (id) => {
    const newTodos = [...state.items];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed

    dispatch({
      type: "toggle_items",
      payload: {
        items: newTodos
      }
    })
  }

  return (
    <div className='container'>
    <div className=' task-form'>
      <input type="text" ref={todoTaskRef} placeholder="New To Do" className='task-form__input input-container' />
      <div className='btns-container'>
        <button  className='button'>Add</button>
        <button  className='button'>Remove Completed</button>
      </div>
    </div>
    <ToDoList todos={state.items} toggleTodo={toggleTodo}/>
 
  </div>
  );
}

export default App;
