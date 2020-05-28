import { FETCH_TODOS_START, FETCH_TODOS_SUCCESS } from '../actions/todosAction';

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   name: 'Home Work',
    //   completed: false,
    //   important: 'important',
    //   summary: 'hello',
    //   time: 'now',
    // },
    // {
    //   id: 2,
    //   name: 'Clean',
    //   completed: false,
    //   important: 'important',
    //   summary: 'hello',
    //   time: 'now',
    // },
    // {
    //   id: 3,
    //   name: 'Wash',
    //   completed: false,
    //   important: 'important',
    //   summary: 'hello',
    //   time: 'now',
    // },
  ],
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
        todos: action.payload,
      };
    default:
      return state;
  }
};
