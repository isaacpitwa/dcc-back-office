import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './routes';

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

export default App;
