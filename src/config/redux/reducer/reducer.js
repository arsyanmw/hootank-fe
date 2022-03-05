const {combineReducers} = require('redux');

import hutangsReducer from './hutangReducer';
import globalReducer from './globalReducer';
import sudahBayarReducer from './sudahBayarReducer';

const reducer = combineReducers({
  hutangsReducer,
  globalReducer,
  sudahBayarReducer,
});

export default reducer;
