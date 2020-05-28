import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const userId = localStorage.getItem('userId');

//function to grab all the users data
export const fetchTodos = () => {
  return dispatch => {
    dispatch({ type: FETCH_TODOS_START });

    //michael - fetch the users todo list might need the user id or just use token
    axiosWithAuth()
      .get(`/api/users/${userId}/todos`)
      .then(res => {
        console.log('Grabbed the todos', res);

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
      .post(`/api/users/${userId}/todos`, todo)
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
  console.log('edit submit has been clicked');
  return dispatch => {
    dispatch({ type: EDIT_TODO });

    axiosWithAuth()
      .put(`/api/todos/${id}`, todo)
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
      .delete(`/api/todos/${id}`)
      .then(res => {
        console.log('deleted the todo', res);

        //call the fetchtodos to rerender the list instead of manually refreshing
      })
      .catch(err => console.log('did not delete the todo', err));
  };
};

//Might need an action to post to the data base that the todo is completed
