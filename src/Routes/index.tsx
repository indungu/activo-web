import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthPage from 'pages/AuthPage';
import AppRoutes from './AppRoutes';
import Dashboard from 'pages/Dashboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" name="Auth" component={AuthPage} />
      <AppRoutes/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
