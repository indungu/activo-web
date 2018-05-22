import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './';

const initialState = {};

const devMiddleware = composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()));
const prodMiddleware = applyMiddleware(thunk);

const middleware = process.env.NODE_ENV == 'development' ? 
  devMiddleware : prodMiddleware;

const store = createStore(
  rootReducer,
  initialState,
  middleware,
);

export default store;
