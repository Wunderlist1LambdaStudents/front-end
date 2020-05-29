import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import NavBar from './NavBar';
import TodoCard from './TodoCard';
import EditTodoForm from './EditTodoForm';
import AddTodoForm from './AddTodoForm';

import { fetchTodos } from '../store/actions/todosAction';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Search from './Search';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

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
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TodosList = ({ todos, fetchTodos, isLoading }) => {
  const userId = localStorage.getItem('userId');
  const [searchTerm, setSearchTerm] = useState('');
  // const todos = useSelector(state => state.todosReducer.todos);
  console.log('user id', userId);
  console.log('My todo list', todos);
  //Micheal
  useEffect(() => {
    fetchTodos();
  }, []);

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  //toggle the forms on and off
  const [toggleAddForm, setToggleAddForm] = useState(false);
  const [toggleEditForm, setToggleEditForm] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const editCurrentTodo = todo => {
    setCurrentTodo(todo);
  };

  const searchChangeHandler = evt => {
    setSearchTerm(evt.target.value);
  };

  if (isLoading) {
    return <Loader type='TailSpin' color='#1e88e5ff' height={80} width={80} />;
  }

  const filterTodos = todos.filter(todo => {
    return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Search searchChangeHandler={searchChangeHandler} />
      <NavBar setToggleAddForm={setToggleAddForm} />

      {filterTodos.map(todo => {
        return (
          <TodoCard
            key={todo.id}
            todo={todo}
            setToggleEditForm={setToggleEditForm}
            toggleEditForm={toggleEditForm}
            editCurrentTodo={editCurrentTodo}
          />
        );
      })}
      <Modal open={toggleAddForm} onClose={() => setToggleAddForm(false)}>
        <div style={modalStyle} className={classes.paper}>
          <AddTodoForm setToggleAddForm={setToggleAddForm} />
        </div>
      </Modal>
      <Modal open={toggleEditForm} onClose={() => setToggleEditForm(false)}>
        <div style={modalStyle} className={classes.paper}>
          <EditTodoForm
            setToggleEditForm={setToggleEditForm}
            currentTodo={currentTodo}
          />
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

export default connect(mapStateToProps, { fetchTodos })(TodosList);
