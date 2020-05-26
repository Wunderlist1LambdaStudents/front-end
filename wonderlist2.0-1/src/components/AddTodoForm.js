import React from 'react';
import { useForm } from 'react-hook-form';

const AddTodoForm = ({ setToggleAddForm }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add a new todo</h1>
      <input type='text' name='todo' ref={register} />
      <select name='important' ref={register}>
        <option>Important</option>
        <option>Not Important</option>
      </select>
      <textarea name='description' ref={register} />
      <button>Add todo</button>
      <button type='button' onClick={() => setToggleAddForm(false)}>
        Cancel
      </button>
    </form>
  );
};

export default AddTodoForm;
