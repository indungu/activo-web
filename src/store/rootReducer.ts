import { combineReducers } from 'redux';

// reducers
import categories from './modules/categories';
import assets from './modules/assets';

const rootReducer = combineReducers({
  assets,
  categories
});

export default rootReducer;
