import React from 'react';
import MyForm from './formComponents/MyForm';
import { signUpFormData, formStyle } from './formComponents/formComponentsData';

const Signup = () => {
  return (
    //Michael - Temporary Styling
    <div className='home-wrapper'>
      <MyForm data={signUpFormData} style={formStyle} />
    </div>
  );
};

export default Signup;
