// react libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// third party packages
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
