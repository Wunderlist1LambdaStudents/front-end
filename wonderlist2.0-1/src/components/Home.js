import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// path = /login and /signup

const Home = () => {
  const { push } = useHistory();

  return (
    <div className='home-wrapper'>
      <div className='main-button'>
        <div className='check-logo'>
          <CheckCircleIcon fontSize='large' color='primary' />{' '}
        </div>
        <Button
          variant='outlined'
          color='Primary'
          onClick={() => push('/login')}
        >
          {' '}
          Login
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          onClick={() => push('/signup')}
        >
          {' '}
          Signup
        </Button>
      </div>
      <a href='https://sharp-bartik-c317ee.netlify.app/'> Home Page </a>
    </div>
  );
};

export default Home;
