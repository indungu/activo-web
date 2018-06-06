// react libraries
import * as React from 'react';

// third party packages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import AuthPage from 'pages/AuthPage';
import DashboardPage from 'pages/DashboardPage';

// tslint:disable-next-line:variable-name
const Routes = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <AuthenticatedRoute path="/dashboard" component={DashboardPage}/>
      </Switch>
  </Router>
);

export default Routes;
