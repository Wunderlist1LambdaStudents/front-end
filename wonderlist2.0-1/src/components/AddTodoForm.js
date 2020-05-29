import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addNewTodo } from '../store/actions/todosAction';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ReplayIcon from '@material-ui/icons/Replay';
import LoopIcon from '@material-ui/icons/Loop';
import { 
  InputBase,
  Checkbox,
  IconButton,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textField: {
    //marginLeft: theme.spacing(1),
    //marginRight: theme.spacing(1),
    //width: 'auto',
  },
}));

const AddTodoForm = ({ setToggleAddForm, addNewTodo }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { important: false, completed: false }
  });

  const onSubmit = data => { console.log(data);
    //the data that is being passed in might changed due to being new to react-hook-form

    // Michael - sketchy hack because the backend guy hates me
    if (isRepeating) data.description = data.description + '#!%**&69';
    addNewTodo(data);
  };

  const classes = useStyles();
  /////////////////////////////////////////////////////////
  /////////////////// HOT FIX CODE ////////////////////////
  /////////////////////////////////////////////////////////
  let isRepeating = false
  //////////////////////////////////////////////////////////
  /////////////////// HOT FIX CODE /////////////////////////
  /////////////////////////////////////////////////////////
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField
        id="datetime-local"
        //label="Next appointment"
        type="datetime-local"
        defaultValue={new Date()}
        className={classes.textField}
        name='date_time'
        inputRef={register}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <InputBase
        type='text'
        name='title' 
        inputRef={register} 
        placeholder='Title'
      />

      <InputBase
        multiline={true}
        defaultValue=''
        name='description'
        inputRef={register}
        inputProps={{ 'aria-label': 'Description' }}
        placeholder='Description'
      />

      <Checkbox 
        icon={<ErrorOutlineIcon />}
        checkedIcon={<ErrorIcon />}
        name="important" 
        inputRef={register}
        value={false}
      />

      <Checkbox 
        icon={<ReplayIcon />}
        checkedIcon={<LoopIcon/>}
        name="replay" 
        value={isRepeating}
        onClick={()=> {isRepeating = !isRepeating; console.log(`repeating = ${isRepeating}`)}}
      />


      <IconButton aria-label="delete" onClick={() => setToggleAddForm(false)}>
        <DeleteIcon />
      </IconButton>
      
  
      <IconButton type="submit"  aria-label="delete" >
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
