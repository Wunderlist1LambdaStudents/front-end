import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addNewTodo } from '../store/actions/todosAction';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { 
  InputBase,
  Checkbox,
  IconButton
} from '@material-ui/core';

const AddTodoForm = ({ setToggleAddForm, addNewTodo }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      important: false,
      completed: false,
    },
  });

  const onSubmit = data => {
    console.log(data);

    //the data that is being passed in might changed due to being new to react-hook-form
    addNewTodo(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputBase
        type='text'
        name='date_time'
        ref={register}
        defaultValue={new Date()}
      />

      <InputBase
        type='text'
        name='title' 
        ref={register} 
        placeholder='Title'
      />

      <InputBase
        multiline={true}
        defaultValue=''
        name='description'
        ref={register}
        inputProps={{ 'aria-label': 'Description' }}
        placeholder='Description'
      />

      <Checkbox 
        icon={<ErrorOutlineIcon />}
        checkedIcon={<ErrorIcon />}
        name="important" 
        ref={register}
        value={false}
      />

      <IconButton aria-label="delete">
        <DeleteIcon onClick={() => setToggleAddForm(false)}/>
      </IconButton>
      
      <IconButton type="submit" aria-label="delete">
        <AddIcon />
      </IconButton>


      <input type='checkbox' name='completed' ref={register} value={false} style={{display: 'none'}} />
      {/* <input type='checkbox' name='important' ref={register} value={false} /> /*}
      <label htmlFor='important'>Important</label>*/}
       {/* NEEDS FUNCTIONALITY  */}
    </form>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addNewTodo })(AddTodoForm);
