import React, { useState } from 'react';
import { connect } from 'react-redux';
//import EditTodoForm from './EditTodoForm';
import { deleteTodo, fetchTodos } from '../store/actions/todosAction';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, Box, Button } from '@material-ui/core'
import {
  CheckCircleOutline as Checked,
  RadioButtonUnchecked as Circle, 
  Error,
  Loop,
  Close,
  Edit,
  Autorenew,
} from '@material-ui/icons/';
import { palette } from '@material-ui/system';

//import Modal from '@material-ui/core/Modal';
/*
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
*/
const useStyles = makeStyles(theme => ({


  paper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  todoCard: {
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
    width: 344,
    padding: 10,
    background: 'primary',
    margin: 5,
    
  },
  cardIcon: {
    display: 'inline',
    position: 'relative',
    fontSize: 48,
    right: -1,
    top: -52,
    float:'right'
  },
  headLine: {
    fontSize: 10,
    margin:0,
    padding:1,
    letterSpacing: 3,
  },
  title: {
    fontSize: 24,
    margin:0,
    padding:0,
  },
  text: {
    margin:0,
    marginTop:0,
    padding:1,
    fontWeight: '400',
  },
  btn: {
    color: '#fff',
    float: 'right',
    fontSize: 12,
    marginLeft: 3,
    paddingBottom:0,
    width: 0,
    right: -10,
    opacity: .8
  },
  closeBtn: {
    color: '#fff',
    float: 'right',
    fontSize: 12,
    right: -10,
    opacity: .8
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
  const classes = useStyles();
  return (
    /*
    
    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
          primary.main
        </Box>
    
    
    */

     todo.description.includes('#!%**&69') ?
    Object.values(todo).map((el, i) =>
    <div className={classes.paper}>
      <Box className={classes.todoCard} bgcolor='primary.main' color="primary.contrastText">
        <p className={classes.headLine}>{todo.date_time = todo.date_time.replace('T','\xa0\xa0\xa0')}</p>
        <h2 className={classes.title}>{todo.title}</h2>
        <p style={{display:'none'}}>{todo.completed}</p>
        {todo.important !== 0 && <SvgIcon color='primary.contrastText' className={classes.cardIcon} component={Circle} ></SvgIcon >}

        {
          todo.description.includes('#!%**&69')
          ? <p className={classes.text}>{todo.description.substring(0, todo.description.length-8) + 'repeating'}</p>
          : <p className={classes.text}>{todo.description}</p>
        }
        
        <Button
          className={classes.btn}
          onClick={() => {
            setToggleEditForm(true);
            editCurrentTodo(todo);
          }}
        >
          EDIT
        </Button>
        <Button
          className={classes.closeBtn}
          onClick={() => {
            deleteTodo(todo.id);
            push('/profile');
          }}
        >
          REMOVE
        </Button>
      </Box>
    </div> 
    
    )
    :
    
    <div className={classes.paper}>
    <Box className={classes.todoCard} bgcolor='primary.main' color="primary.contrastText">
      <p className={classes.headLine}>{todo.date_time = todo.date_time.replace('T','\xa0\xa0\xa0')}</p>
      <h2 className={classes.title}>{todo.title}</h2>
      <p style={{display:'none'}}>{todo.completed}</p>
      {todo.important !== 0 && <SvgIcon color='primary.contrastText' className={classes.cardIcon} component={Circle} ></SvgIcon >}

      {
        todo.description.includes('#!%**&69')
        ? <p className={classes.text}>{todo.description.substring(0, todo.description.length-8) + 'repeating'}</p>
        : <p className={classes.text}>{todo.description}</p>
      }
      
      <Button
        className={classes.btn}
        onClick={() => {
          setToggleEditForm(true);
          editCurrentTodo(todo);
        }}
      >
        EDIT
      </Button>
      <Button
        className={classes.closeBtn}
        onClick={() => {
          deleteTodo(todo.id);
          push('/profile');
        }}
      >
        REMOVE
      </Button>
    </Box>
  </div> 
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(null, { deleteTodo, fetchTodos })(TodoCard);
