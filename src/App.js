import React from 'react';
import './App.css';

//Components import
import Form from './components/form/form';

//Header related components 
import Header from './components/header/header';
import EnterName from './components/header/enterName';

const App = () => (
  <>
    <Header />
    <EnterName />
    <Form />
  </>
);

export default App;
