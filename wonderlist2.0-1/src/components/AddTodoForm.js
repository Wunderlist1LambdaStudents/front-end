import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addNewTodo } from '../store/actions/todosAction';

const AddTodoForm = ({ setToggleAddForm, addNewTodo }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);

    //the data that is being passed in might changed due to being new to react-hook-form
    addNewTodo(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add a new todo</h1>
      <input
        type='text'
        name='date_time'
        ref={register}
        defaultValue={'Today'} // { currentTodo.time }
      />
      <input type='text' name='todo' ref={register} placeholder='Title' />
      <input type='text' name='title' ref={register} placeholder='Title' />
      <input type='checkbox' name='important' />
      <label htmlFor='important'>Important</label>
      <textarea name='description' ref={register} defaultValue='description' />
      <label htmlFor='important'>Important</label>
      <textarea name='description' ref={register} defaultValue='description' />
      <button>Add</button> {/* NEEDS FUNCTIONALITY */}
      <button type='button' onClick={() => setToggleAddForm(false)}>
        Cancel
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addNewTodo })(AddTodoForm);
