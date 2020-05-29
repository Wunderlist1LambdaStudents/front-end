import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { editTodos } from '../store/actions/todosAction';


const EditTodoForm = ({ setToggleEditForm, currentTodo, editTodos }) => {
  console.log(currentTodo.id);
  /*
  todo.description.includes('#!%**&69')
  ? <p>{todo.description.substring(0, todo.description.length-8) + 'repeating'}</p>
  : <p>{todo.description}</p>
  */
 

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {

    if(!isRepeating){data.description = secretFunction(data.description, true)}

    editTodos(currentTodo.id, data);
  };
  

  //////////////////////////////////////////////////////////
  /////////////////// HOT FIX CODE /////////////////////////
  /////////////////////////////////////////////////////////

  let isRepeating = false;
  
  function secretFunction(descript , truthy){
    if (truthy) return (descript+'#!%**&69')
    if (descript.includes('#!%**&69')){
      currentTodo.description.slice(0, descript.length-8)
      return descript.slice(0, descript.length-8)
      
    }else{console.log('nope'); return descript}
  }
  //////////////////////////////////////////////////////////
  /////////////////// HOT FIX CODE /////////////////////////
  /////////////////////////////////////////////////////////
  

  return (
    

    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Edit todo</h1>
      <input
        type='text'
        name='date_time'
        ref={register}
        defaultValue={currentTodo.date_time}
      />
      <input
        type='text'
        name='title'
        ref={register}
        defaultValue={currentTodo.title}
      />
      <input
        type='checkbox'
        name='important'
        defaulValue={currentTodo.important}
      />
      <label htmlFor='important'>Important</label>
      <textarea
        name='description'
        ref={register}
        defaultValue={secretFunction(currentTodo.description)}
      />
      <button>Save</button> {/* NEEDS FUNCTIONALITY */}
      <button type='button' onClick={() => setToggleEditForm(false)}>
        Cancel
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { editTodos })(EditTodoForm);
