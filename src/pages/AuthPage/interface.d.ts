import AuthPage from './index';

export interface IAuthPageProps extends React.Props<AuthPage> {
  location: {
    search: string
  };
}

export interface IAuthPageState extends React.ComponentState {
  errorMessage: string;
}