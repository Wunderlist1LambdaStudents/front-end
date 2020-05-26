import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const fetchTodos = () => {
  return dispatch => {
    dispatch({ type: FETCH_TODOS_START });

    axiosWithAuth()
      .get('')
      .then(res => {
        console.log(res.data);

        //payload might change after the backend calls
        dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data });
      })
      .catch(err => console.log(err));
  };
};

export const addNewTodo = todo => {
  return dispatch => {
    dispatch({ type: ADD_TODO });

    axiosWithAuth()
      .post('', todo)
      .then(res => {
        console.log('added new todo', res);

        //call the fetchtodos to rerender the list instead of manually refreshing
        // fetchTodos();
      })
      .catch(err => console.log('did not add new todo', err));
  };
};

export const editTodos = (id, todo) => {
  return dispatch => {
    dispatch({ type: EDIT_TODO });

    axiosWithAuth()
      .put(``, todo)
      .then(res => {
        console.log('edit the todo', res);

        //call the fetchtodos to rerender the list instead of manually refreshing
        // fetchTodos();
      })
      .catch(err => console.log('did not edit the todo', err));
  };
};

export const editTodo = id => {
  return dispatch => {
    dispatch({ type: DELETE_TODO });

    axiosWithAuth()
      .delete(``)
      .then(res => {
        console.log('deleted the todo', res);

        //call the fetchtodos to rerender the list instead of manually refreshing
        // fetchTodos();
      })
      .catch(err => console.log('did not delete the todo', err));
  };
};
