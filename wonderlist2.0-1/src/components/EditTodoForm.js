import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { editTodos } from '../store/actions/todosAction';

const EditTodoForm = ({ id, setToggleEditForm, todo, currentTodo }) => {
  // const id = useParams();
  // const [todo, setTodo] = useState({
  //   id,
  // });
  console.log(currentTodo);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      // todo: todo.name,
    },
  });

  const onSubmit = data => {
    console.log(data);

    //might change as well
    editTodos(id, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Edit todo</h1>
      <input
        type='text'
        name='time'
        ref={register}
        defaultValue={"Today"} // { currentTodo.time }
      />
      <input
        type='text'
        name='todo'
        ref={register}
        defaultValue={currentTodo.name}
      />
      <input 
        type="checkbox" 
        name="important" 
        value="important" /* {currentTodo.important} */ 
      /> 
      <label 
        htmlFor="important"> 
        Important 
      </label>
      <textarea
        name='description'
        ref={register}
        defaultValue={currentTodo.summary}
      />
      <button>Save</button> {/* NEEDS FUNCTIONALITY */}
      <button>Edit</button> {/* NEEDS FUNCTIONALITY */}
      <button 
        type='button' 
        onClick={() => setToggleEditForm(false)}>
        Cancel
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { editTodos })(EditTodoForm);
