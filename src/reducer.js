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
    default: {
      return state;
    }
  }
}
