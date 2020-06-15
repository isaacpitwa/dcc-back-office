import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import {store} from './utils/datasource'
const browserHistory = createBrowserHistory();

const App = () => {
  return (
     <Provider store = {store}>
    <Router history={browserHistory}>
      <Routes />
    </Router>
    </Provider>
  );
}

export default App;
