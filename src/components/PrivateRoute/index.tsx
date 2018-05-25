import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

// TODO: RENAME TO AUTHENTICATED ROUTE

import { authService } from '../../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => ((
  <Route {...rest} render={props => authService.isAuthenticated() ? (<Component {...props} />): <Redirect to='/' /> } />
));

export default PrivateRoute;
