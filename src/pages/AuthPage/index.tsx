import { authService } from '../../utils/auth';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { IAuthPageProps, IAuthPageState } from './interface';
import './AuthPage.scss';

class AuthPage extends React.Component <IAuthPageProps, IAuthPageState> {

  state: IAuthPageState = {
    errorMessage: null,
  };

  public componentDidMount(): void {
    // TODO: ACTUALLY CHECK THAT THE ERROR EQUALS WHAT IS RETURNED FROM ANDELA-API
    if (this.props.location.search) {
      this.setState({
        errorMessage: 'Authentication failed.',
      });
    }
  }

  private handleLogin = (): void => {
    window.location.replace('http://api-staging.andela.com/login?redirect_url=http://activo-dev.andela.com:3000');
  }

  public render(): Object {
    return (
      <React.Fragment>
        {
          authService.isAuthenticated()
            ? <Redirect to="/dashboard" />
            : <button type="button" onClick={this.handleLogin}>LOGIN WITH ANDELA AUTH</button>
        }
      </React.Fragment>
    );
  }
}

export default AuthPage;
