export default function redurer(state, action) {
  switch (action.type) {
    case "set_items": {
      return {
        ...state,
        items: state.items.concat(action.payload.items),
      };
    }
    case "toggle_items": {
      return {
        ...state,
        items: state.items,
      };  
    }
    case "delete_items": {
      const newTodos = state.items.filter((todo) => !todo.completed);
      return {
        ...state,
        items: newTodos,
      };  
    }
    default: {
      return state;
    }
  }
}
