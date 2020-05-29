import React from 'react';
import MyForm from './formComponents/MyForm';
import { loginFormData, formStyle } from './formComponents/formComponentsData';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Login = () => (
  // Michael- Temporary styling
  <div className='form-flex'>
    <div className='check-logo'>
      <CheckCircleIcon fontSize='large' color='primary' />
    </div>
    <MyForm data={loginFormData} style={formStyle} />
  </div>
);

export default Login;
