// react libraries
import * as React from 'react';

import { Redirect } from 'react-router-dom';

// styles
import './AuthPage.scss';

// interface
import { IAuthProps } from './interfaces';

import { authService } from '../../utils/auth';

class AuthPage extends React.Component<IAuthProps> {
  private ANDELA_AUTH_HOST = process.env.ANDELA_AUTH_HOST;
  private AUTH_REDIRECT_URL = process.env.AUTH_REDIRECT_URL;

  constructor(props) {
    super(props);

    // from the context of the tests
    if (this.ANDELA_AUTH_HOST === undefined) {
      this.ANDELA_AUTH_HOST = this.props.ANDELA_AUTH_HOST;
      this.AUTH_REDIRECT_URL = this.props.AUTH_REDIRECT_URL;
    }
  }

  handleLogin = () => {
    window.location.replace(`${this.ANDELA_AUTH_HOST}/login?redirect_url=${this.AUTH_REDIRECT_URL}`);
  }

  render() {
    return (
      <React.Fragment>
        {
          authService.isAuthenticated()
            ? <Redirect to="/dashboard" />
            : <div className="auth-container">
              <div className="assets">
                <div className="auth-logo">Activo</div>
                <div className="jumbotron">
                  <h1>Smart Asset Management <br />for your business</h1>
                  <div className="login-btn-container" onClick={this.handleLogin}>
                    <button className="google-image">
                      <img src="images/google-logo.png" />
                    </button>
                    <button className="login-button">
                      LOGIN WITH GOOGLE
                    </button>
                  </div>
                </div>
              </div>
              <div className="macbook-image">
                <img src="images/macbook.svg" />
              </div>
            </div>
        }
      </React.Fragment>
    );
  }
}

export default AuthPage;
