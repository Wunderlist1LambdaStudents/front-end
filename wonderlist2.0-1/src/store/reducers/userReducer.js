import { LOGIN_SUBMIT } from '../actions/userActions';

const initialState = {
  isFetchingUser: false,
  user: {},
  userError: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      // console.log(user.id);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
