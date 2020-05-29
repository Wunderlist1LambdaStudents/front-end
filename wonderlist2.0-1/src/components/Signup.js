import React from 'react';
import MyForm from './formComponents/MyForm';
import { signUpFormData, formStyle } from './formComponents/formComponentsData';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Signup = () => {
  return (
    //Michael - Temporary Styling
    <div className='form-flex'>
      <div className='check-logo'>
        <CheckCircleIcon fontSize='large' color='primary' />
      </div>
      <MyForm data={signUpFormData} style={formStyle} />
    </div>
  );
};

export default Signup;
