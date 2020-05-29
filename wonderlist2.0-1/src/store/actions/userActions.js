import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'

export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';
export const LOGIN_SUBMIT_START = 'LOGIN_SUBMIT_START';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';



export const signupSubmitHandler = (data, history) => {

  
  return dispatch => {
    dispatch({ type: SIGN_UP_SUBMIT });

    axiosWithAuth()
      .post('/api/auth/register', data)
      .then(res => {
        console.log('created a new user', res)
        //localStorage.setItem('token', res.data.token);
        //history.push('/profile');
      })
      .catch(err => console.log('could not create new user', err));



  };
};

// export const loginSubmitHandler = (loginData, history) => {
//   return dispatch => {
//     dispatch({ type: LOGIN_SUBMIT_START });
//     axiosWithAuth()
//       .post('/api/auth/login', loginData)
//       .then(res => {
//         console.log('your user is logged in', res.data.id);
//         dispatch({ type: LOGIN_SUBMIT_SUCCESS, payload: res.data.id });
//         localStorage.setItem('token', res.data.token);
//         history.push('/profile');
//       })
//       .catch(err => console.log('your user is not logged in', err));
//   };
// };
