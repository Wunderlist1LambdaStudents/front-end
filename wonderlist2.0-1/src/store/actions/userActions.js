import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';
export const LOGIN_SUBMIT_START = 'LOGIN_SUBMIT_START';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';

export const signupSubmitHandler = (data, history) => {
  return dispatch => {
    dispatch({ type: SIGN_UP_SUBMIT });
    axiosWithAuth()
      .post('/api/auth/register', data)
      .then(res => {
        console.log('created a new user', res);
        //localStorage.setItem('token', res.data.token);
        //history.push('/profile');
      })
      .catch(err => console.log('could not create new user', err));
  };
};
