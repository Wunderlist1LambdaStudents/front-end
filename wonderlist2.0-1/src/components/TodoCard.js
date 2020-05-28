import React, { useState } from 'react';
import { connect } from 'react-redux';
import EditTodoForm from './EditTodoForm';
import { deleteTodo, fetchTodos } from '../store/actions/todosAction';
import { useHistory } from 'react-router-dom';

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

const TodoCard = ({
  todo,
  setToggleEditForm,
  toggleEditForm,
  editCurrentTodo,
  deleteTodo,
  fetchTodos,
}) => {
  const { push } = useHistory();

  return (
    <div style={{ border: 'solid red' }}>
      <div className='todo-card'>
        <h3>{todo.title}</h3>
        <p>{todo.completed}</p>
        {todo.important && <p>IMPORTANT!</p>}
        <p>{todo.description}</p>
        <p>{todo.date_date_time}</p>
        <button
          onClick={() => {
            setToggleEditForm(true);
            editCurrentTodo(todo);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteTodo(todo.id);
            push('/profile');
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(null, { deleteTodo, fetchTodos })(TodoCard);
