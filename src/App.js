import { useReducer, useRef } from "react";
import "./App.css";
import reducer from "./reducer";
import ToDoList from './components/ToDoList';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const initialState = {
    items: [],
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
  const handleToDoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === "") {
      return;
    } else {
      dispatch({
        type: "set_items",
        payload: {
          items: [{ id: uuidv4(), task, completed: false }]
        },
      })
      todoTaskRef.current.value = "";
    }
  };

  const handleToDoQuit = () => {
    const newTodos = state.items.filter((todo) => !todo.completed);
    dispatch({
      type: "delete_items",
      payload: {
        items: newTodos
      },
    })
  };

  return (
    <div className='container'>
      <div className=' task-form'>
        <input type="text" ref={todoTaskRef} placeholder="New To Do" className='task-form__input input-container' />
        <div className='btns-container'>
          <button onClick={handleToDoAdd} className='button'>Add</button>
          <button onClick={handleToDoQuit} className='button'>Remove Completed</button>
        </div>
      </div>
      <ToDoList todos={state.items} toggleTodo={toggleTodo} />
      {
        state.items.filter((todo) => !todo.completed).length === 0 ? "" :
          <div className='missingTask'>You have {state.items.filter((todo) => !todo.completed).length} todo's left.</div>
      }
    </div>
  );
}

export default App;
