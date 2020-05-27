import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Profile from './Profile';

// path = /login and /signup

const Home = () => {
  const { push } = useHistory();

  return (
    <>
      <Button variant='outlined' color='Primary' onClick={() => push('/login')}>
        Login
      </Button>
      <Button
        variant='outlined'
        color='secondary'
        onClick={() => push('/signup')}
      >
        Signup
      </Button>
      <Profile />
    </>
  );
};

export default Home;
