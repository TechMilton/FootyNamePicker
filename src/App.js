import React from 'react';
import './App.css';

//Form related components
import Form from './components/form/form';
// import Button from './components/form/button';
// import ListNames from './components/form/listNames';

//Header related components 
import Header from './components/header/header';

const App = () => (
  <>
    <div class="page-container">
      <Header />
      <Form />

    </div>
  </>
);

export default App;
