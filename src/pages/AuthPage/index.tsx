// react libraries
import * as React from 'react';

// styles
import './AuthPage.scss';

// interface
import { IAuthProps } from './interfaces';

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
      <div>
        <button type="button" onClick={this.handleLogin}>Login Andela Auth</button>
      </div>
    );
  }
}

export default AuthPage;
