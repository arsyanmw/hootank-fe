const {combineReducers} = require('redux');

import hutangsReducer from './hutangReducer';
import globalReducer from './globalReducer';
import createHutangReducer from './createHutangReducer';

const reducer = combineReducers({
  hutangsReducer,
  globalReducer,
  createHutangReducer
});

export default reducer;
