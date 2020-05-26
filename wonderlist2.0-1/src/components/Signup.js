import React from 'react';
import MyForm from './formComponents/MyForm'
import {signUpFormData, formStyle} from './formComponents/formComponentsData'

const Signup = () => (
  //Michael - Temporary Styling
  <MyForm data={signUpFormData} style={formStyle}/>

)

export default Signup;
