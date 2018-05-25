import * as React from 'react';
import { Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => ((
  <React.Fragment>
    <Route path='/' exact component={AuthPage} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
  </React.Fragment>
));

export default AppRoutes;
