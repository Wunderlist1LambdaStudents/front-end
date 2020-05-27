import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';
export const LOGIN_SUBMIT_START = 'LOGIN_SUBMIT_START';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT';

export const signupSubmitHandler = data => {
  return dispatch => {
    dispatch({ type: SIGN_UP_SUBMIT });

    axiosWithAuth()
      .post('/api/auth/register', data)
      .then(res => {
        console.log('created a new user', res);
      })
      .catch(err => console.log('could not create new user', err));
  };
};

export const loginSubmitHandler = loginData => {
  return dispatch => {
    dispatch({ type: LOGIN_SUBMIT_START });
    axiosWithAuth()
      .post('/api/auth/login', loginData)
      .then(res => {
        console.log('your user is logged in', res);

        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUBMIT_SUCCESS, payload: res.data });
      })
      .catch(err => console.log('your user is not logged in', err));
  };
};
