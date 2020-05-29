import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';
export const LOGIN_SUBMIT_START = 'LOGIN_SUBMIT_START';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';

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
