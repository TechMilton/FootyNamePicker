import React from 'react';
import './App.css';

//Form related components
import Form from './components/form/form';
// import Button from './components/form/button';

//Header related components 
import Header from './components/header/header';
import EnterName from './components/header/enterName';

const App = () => (
  <>

    <Header />
    <EnterName />

    <Form />
    {/* <Button /> */}
  </>
);

export default App;
