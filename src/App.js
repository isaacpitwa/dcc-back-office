import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from './utils/datasource'
const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
