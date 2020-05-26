import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from "react-router-dom"

import rootReducer from './store/reducers';

import './index.css';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>

      <Router>

        <App />

      </Router>

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
