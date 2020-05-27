import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import TodoCard from './TodoCard';
import EditTodoForm from './EditTodoForm';
import AddTodoForm from './AddTodoForm';

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

const TodosList = ({ todos }) => {
  // const todos = useSelector(state => state.todosReducer.todos);

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  //toggle the forms on and off
  const [toggleAddForm, setToggleAddForm] = useState(false);
  const [toggleEditForm, setToggleEditForm] = useState(false);

  return (
    <div>
      <button
        className='add-todo-button'
        onClick={() => {
          setToggleAddForm(true);
        }}
      >
        Add A Todo
      </button>
      <h1>Render the list of todos</h1>
      {todos.map(todo => {
        return (
          <>
            <TodoCard
              key={todo.id}
              todo={todo}
              setToggleEditForm={setToggleEditForm}
            />
            <Modal
              open={toggleEditForm}
              onClose={() => setToggleEditForm(false)}
            >
              <div style={modalStyle} className={classes.paper}>
                <EditTodoForm
                  setToggleEditForm={setToggleEditForm}
                  todo={todo}
                  id={todo.id}
                />
              </div>
            </Modal>
          </>
        );
      })}
      <Modal open={toggleAddForm} onClose={() => setToggleAddForm(false)}>
        <div style={modalStyle} className={classes.paper}>
          <AddTodoForm setToggleAddForm={setToggleAddForm} />
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    isLoading: state.todos.isLoading,
  };
};

export default connect(mapStateToProps, {})(TodosList);
