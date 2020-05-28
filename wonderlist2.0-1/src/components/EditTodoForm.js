import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { editTodos } from '../store/actions/todosAction';

const EditTodoForm = ({ setToggleEditForm, currentTodo, editTodos }) => {
  console.log(currentTodo.id);

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    //might change as well
    editTodos(currentTodo.id, data);
  };

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
        defaultValue={currentTodo.description}
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
