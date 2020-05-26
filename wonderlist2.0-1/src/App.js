import React from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import {Route, Switch} from 'react-router-dom'
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <CssBaseline>

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>    
      </Switch>
      
    </CssBaseline>
  );
}

export default App;
