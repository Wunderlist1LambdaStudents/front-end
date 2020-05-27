import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditTodoForm from './EditTodoForm';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TodoCard = ({ todo, setToggleEditForm }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <div>
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
    </div>
  );
};

export default TodoCard;
