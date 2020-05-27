import { FETCH_TODOS_START, FETCH_TODOS_SUCCESS } from '../actions/todosAction';

const initialState = {
  todos: [],
  isLoading: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
