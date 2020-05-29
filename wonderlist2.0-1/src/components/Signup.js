import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { signupSubmitHandler } from '../store/actions/userActions';

import MyForm from './formComponents/MyForm';
import { signUpFormData, formStyle } from './formComponents/formComponentsData';

import { Button, Container } from '@material-ui/core';
import {
  InputLabel,
  Input,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Signup = ({ signupSubmitHandler }) => {
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    console.log(data);
    signupSubmitHandler(data);
    history.push('/');
  };

  return (
    //Michael - Temporary Styling
    <div className='form-flex'>
      <div className='check-logo'>
        <CheckCircleIcon fontSize='large' color='primary' />
      </div>
      {/* <MyForm data={signUpFormData} style={formStyle} /> */}
      {/* <FormControl onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor='username'></InputLabel>
        <Input name='username' type='text' inputRef={register} />
        <InputLabel htmlFor='password'></InputLabel>
        <Input name='password' type='password' inputRef={register} />
        {/* <Button variant='outlined' type='submit'>
          Sign up
        </Button> */}
      {/* <button>sign up</button> */}
      {/* <Button type='button' variant='outlined'>
          Go Back
        </Button> */}
      {/* </FormControl> */}
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' name='username' ref={register} />
        <input type='password' name='password' ref={register} />
        <button> sign up</button>
        <button type='button' onClick={() => history.push('/')}>
          Go back
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(null, { signupSubmitHandler })(Signup);
