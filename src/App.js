import React from 'react';
import './App.css';

// import the ReactRouter components
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//Form related components
import Form from './components/form/form';
// import Button from './components/form/button';

//Header related components 
import Header from './components/header/header';


function App() {

  return (
    <Router>
      <div class="page-container">
        <Header />
        <Form />
      </div>
    </Router>
  )
};

export default App;
