import React from 'react';
import { Switch } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { MainLayout, AuthLayout } from './layout';
import { Home, Login } from './views';
import * as ROUTES from './utils/constants/routes';


const AppRouter = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Home}
        path={ROUTES.LANDING}
        layout={MainLayout}  exact/>
      <RouteWithLayout
        component={Login}
        path={ROUTES.LOGIN}
        layout={AuthLayout} />
    </Switch>
  );
}

export default AppRouter;
