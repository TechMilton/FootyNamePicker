import React, { useState } from 'react';
import './App.css';

// import the ReactRouter components
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

//Form related components
import Form from './components/form/form';

//Header related components 
import Header from './components/header/header';
import Settings from './components/settings/settings';


function App() {

  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <p><Link to="/settings">Game Settings</Link></p>
          <div className="page-container">
            <Header />
            <Form />
          </div>
        </Route>
      </Switch>

      <Route path="/Settings">
        <p><Link to="/">Link to Home</Link></p>
        <div className="page-container">
          <Header />
          <Settings />
        </div>
      </Route>



    </Router>
  )
};

export default App;
