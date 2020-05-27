import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import MyInput from './MyInput';
import { Button, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import {
  signupSubmitHandler,
  loginSubmitHandler,
} from '../../store/actions/userActions';

//////////////////////////////////////
//////////////////////////////////////
// Trying to build this to make it as
// reusuble as possible. You pass an
// imported object to it as props
// (from formComponentsData.js) and
// it spits out a complete form with
// validation, buttons, error messages
// the whole shabang.
//////////////////////////////////////
//////////////////////////////////////

function MyForm(props) {
  // Michael- useForm state management
  const { register, handleSubmit, errors, watch } = useForm({ mode: 'onBlur' });
  // const onSubmit = data => Object.values(data).map(key => console.dir(key))
  const onSubmit = data => {
    console.log(data);
    // props.signupSubmitHandler(data);
    props.loginSubmitHandler(data);
    // if (Object.values(data).length > 2) {
    // } else {
    // }
  };

  //useHistory into constant to pass into props.data
  const history = useHistory();
  // Michael- making a refrence for password matching later
  const passwordRef = useRef({});
  passwordRef.current = watch('password', '');
  // Michael- packaging all this data for the makeForm() function
  const formData = props.data(history, passwordRef);
  const formPackage = { errors, register, formData };

  function makeForm(obj) {
    return (
      <form style={props.style} onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(obj).map(
          key =>
            key !== 'buttons' && (
              // Michael- Build an input for each key in input data ( EXCEPT if key name is buttons )
              <MyInput
                key={obj[key].id}
                guid={obj[key].id}
                name={`${key}`}
                formPackage={formPackage}
              />
            )
        )}

        <Container>
          {Object.values(obj.buttons).map(value => (
            // Michael- Build a button for each value stored in data.buttons
            <Button {...value.attributes} key={value.id}>
              {value.textContent}
            </Button>
          ))}
        </Container>
      </form>
    );
  }

  return makeForm(formData);
}

const mapStateToProps = state => {
  return state;
};

export default connect(null, { signupSubmitHandler, loginSubmitHandler })(
  MyForm
);
