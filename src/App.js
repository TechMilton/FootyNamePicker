import React from 'react';
import './App.css';

//Components import
import Form from './components/form/form';

//Header related components 
import Header from './components/header/header';
import EnterName from './components/header/enterName';
import Button from './components/form/button';

const App = () => (
  <>

    <Header />
    <EnterName />

    <Form />
    <Button />
  </>
);

export default App;
