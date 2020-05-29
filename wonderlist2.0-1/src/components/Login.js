import React from 'react';
import MyForm from './formComponents/MyForm';
import { loginFormData, formStyle } from './formComponents/formComponentsData';

const Login = () => (
  // Michael- Temporary styling
  <div className='home-wrapper'>
    <MyForm data={loginFormData} style={formStyle} />
  </div>
);

export default Login;
