// react libraries
import * as React from 'react';

// third party packages
import { Route, Switch } from 'react-router-dom';

// components
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import AuthPage from 'pages/AuthPage';
import DashboardPage from 'pages/DashboardPage';
import HealthCheck from 'pages/HealthCheck';
import SettingsPage from 'pages/SettingsPage';
import SingleCategoryPage from 'pages/SingleCategoryPage';

// tslint:disable-next-line:variable-name
const Routes = () => (
  <Switch>
    <Route exact path="/" component={AuthPage} />
    <Route exact path="/health" component={HealthCheck} />
    <AuthenticatedRoute path="/settings" component={SettingsPage} />
    <AuthenticatedRoute path="/dashboard" component={DashboardPage} />
    <AuthenticatedRoute path="/assets/:id" component={SingleCategoryPage}/>
  </Switch>
);

export default Routes;
