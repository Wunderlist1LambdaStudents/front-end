import {
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_START,
} from '../actions/userActions';

const initialState = {
  isFetchingUser: false,
  userId: null,
  userError: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT_START:
      // console.log(user.id);
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUBMIT_SUCCESS:
      // console.log(user.id);
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};
