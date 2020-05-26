import React from 'react';
import MyForm from './formComponents/MyForm'
import {loginFormData, formStyle} from './formComponents/formComponentsData'

const Login = () => (
  // Michael- Temporary styling
  <MyForm data={loginFormData} style={formStyle}/>

)

export default Login;
