import React from 'react';

const TodoCard = ({ todo }) => {
  return (
    <div className='todo-card'>
      <h3>{todo.name}</h3>
      <p>{todo.completed}</p>
      <p>{todo.important}</p>
      <p>{todo.summary}</p>
      <p>{todo.time}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoCard;
