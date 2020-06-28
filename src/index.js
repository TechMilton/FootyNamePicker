import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { HashRouter } from 'react-router-dom';

console.log('index.js is running')
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  , document.getElementById('root'));

