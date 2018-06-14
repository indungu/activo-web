// react libraries
import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

// helper functions
import { authService } from '../../utils/auth';

const AuthenticatedRoute = ({ component: Component, ...rest }) => ((
  <div className="dynamic-content container">
    <Route { ...rest }
    render={props => authService.isAuthenticated() ? <Component {...props} /> : <Redirect to="/" /> } />
  </div>
));

export default AuthenticatedRoute;
