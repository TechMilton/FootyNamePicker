import React, { useReducer } from 'react';

// import the ReactRouter components
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import './App.css';

import HomeView from './views/HomeView/HomeView';
import SettingsView from './views/SettingsView/SettingsView';
import TeamsView from './views/TeamsView/TeamsView';
import reducer from './store/reducer';
import initialState from './store/initialState';

import { appUrls } from './urls';

// Creating a context through which we will be able to access global state
export const AppContext = React.createContext({});

const App = () => {

  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path={appUrls.HOME} component={HomeView} />
          <Route path={appUrls.SETTINGS} component={SettingsView} />
          <Route path={appUrls.TEAMS} component={TeamsView} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
