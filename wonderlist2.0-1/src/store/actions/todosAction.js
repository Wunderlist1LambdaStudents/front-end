import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

//function to grab all the users data
export const fetchTodos = () => {
  return dispatch => {
    dispatch({ type: FETCH_TODOS_START });

    //fetch the users todo list might need the user id or just use token
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

//add a new todo
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

// edit the todo the user clicked ons
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

//
export const deleteTodo = id => {
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
