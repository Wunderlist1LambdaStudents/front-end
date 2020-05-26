import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditTodoForm = ({ setToggleEditForm }) => {
  const id = useParams();
  const [todo, setTodo] = useState({
    id,
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      todo,
    },
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Edit todo</h1>
      <input type='text' name='todo' ref={register} />
      <select name='important' ref={register}>
        <option>Important</option>
        <option>Not Important</option>
      </select>
      <textarea name='description' ref={register} />
      <button>Edit Todo</button>
      <button type='button' onClick={() => setToggleEditForm(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditTodoForm;
