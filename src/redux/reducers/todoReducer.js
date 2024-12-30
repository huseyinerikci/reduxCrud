import ActionTypes from "../actionTypes";

const initialState = {
  todos: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET:
      return { todos: action.payload };
    case ActionTypes.CREATE:
      const newTodos = [...state.todos, action.payload];
      return { todos: newTodos };
    case ActionTypes.DELETE:
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      return { todos: filtred };
    case ActionTypes.TOGGLE:
      const updated = { ...action.payload, isDone: !action.payload.isDone };
      const updatedTodos = state.todos.map((i) =>
        i.id === updated.id ? updated : i
      );
      return { todos: updatedTodos };
    case ActionTypes.UPDATE:
      const editedTodo = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { todos: editedTodo };
    default:
      return state;
  }
};

export default todoReducer;
