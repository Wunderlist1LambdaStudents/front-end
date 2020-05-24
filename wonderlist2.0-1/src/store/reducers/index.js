import { combineReducers } from 'redux';
import { todosReducer as todos } from './todosReducer';
import { userReducer as user } from './userReducer';

export default combineReducers({
  todos,
  user,
});
