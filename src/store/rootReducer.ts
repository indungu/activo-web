import { combineReducers } from 'redux';

// reducers
import assets from 'modules/assets';
import auth from 'modules/auth';
import categories from 'modules/categories';

const rootReducer = combineReducers({
  assets,
  auth,
  categories,
});

export default rootReducer;
