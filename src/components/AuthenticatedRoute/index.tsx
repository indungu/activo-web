// react libraries
import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

// helper functions
import { authService } from '../../utils/auth';

const AuthenticatedRoute = ({ component: Component, ...rest }) => ((
  <Route { ...rest }
    render={props => authService.isAuthenticated() ? <Component { ...props } /> : <Redirect to="/" /> } />
));

export default AuthenticatedRoute;
