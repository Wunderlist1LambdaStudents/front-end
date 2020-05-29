import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Profile from './components/Profile';
import PrivateRoutes from './components/PrivateRoutes';
import NavBar from './components/NavBar';

const theme = createMuiTheme({
  palette:{
    common:{
      white:"#fafafa"

    },
    primary:{
      main:'#1e88e5ff'
      //light:''
      //dark:''
    },
    //secondary:{
      //main:#
    //},
    error:{
      main:'#ff0c3eff'
    },
    warning:{
      main:'#FFC107'
    },
    //info:{
      //main:'#'
    //},
    success:{
      main:'#27AE60'
    }
  }
})

console.log(theme)

function App() {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <PrivateRoutes path='/profile' component={Profile} />
        </Switch>
      </MuiThemeProvider>
    </CssBaseline>
  );
}

export default App;
