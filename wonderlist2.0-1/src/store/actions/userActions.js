import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const signSubmitHandler = data => {
  return dispatch => {
    dispatch({ type: SIGN_UP_SUBMIT });

    axiosWithAuth()
      .post('', data)
      .then(res => {
        console.log('created a new user', res);
      })
      .catch(err => console.log('could not create new user', err));
  };
};

export const loginSubmitHandler = loginData => {
  return dispatch => {
    dispatch({ type: LOGIN_SUBMIT });
    axiosWithAuth()
      .post('', loginData)
      .then(res => {
        console.log('your user is logged in', res);

        localStorage.setItem('token', res.data.token);
      })
      .catch(err => console.log('your user is not logged in', err));
  };
};
