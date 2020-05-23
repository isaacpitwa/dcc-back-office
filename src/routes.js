import React from 'react';
import { Switch } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { MainLayout } from './layout';
import { Home } from './views';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Home}
        path='/'
        layout={MainLayout} />
        
    </Switch>
  );
}

export default Routes;
