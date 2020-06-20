import React from 'react';
import { Switch } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { MainLayout } from './layout';
import { Home } from './views';
import * as ROUTES from './utils/constants/routes';


const AppRouter = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Home}
        path={ROUTES}
        layout={MainLayout} />
        
    </Switch>
  );
}

export default AppRouter;
