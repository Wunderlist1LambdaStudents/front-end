import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoCard from './TodoCard';

const TodosList = () => {
  const todos = useSelector(state => state.todosReducer.todos);

  return (
    <div>
      <h1>Render the list of todos</h1>
      {todos.map(todo => {
        return <TodoCard key={todo.key} todo={todo} />;
      })}
    </div>
  );
};

export default TodosList;
