import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Profile from './components/Profile';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <PrivateRoutes path='/profile' component={Profile} />
      </Switch>
    </CssBaseline>
  );
}

export default App;
