import React from 'react';
import { useHistory } from 'react-router-dom';

const TodoCard = ({ todo, setToggleEditForm }) => {
  return (
    <div className='todo-card'>
      <h3>{todo.name}</h3>
      <p>{todo.completed}</p>
      <p>{todo.important}</p>
      <p>{todo.summary}</p>
      <p>{todo.time}</p>
      <button
        onClick={() => {
          setToggleEditForm(true);
        }}
      >
        Edit
      </button>
      <button>Delete</button>
    </div>
  );
};

export default TodoCard;
