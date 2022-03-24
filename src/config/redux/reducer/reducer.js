const {combineReducers} = require('redux');

import hutangsReducer from './hutangReducer';
import globalReducer from './globalReducer';
import sudahBayarReducer from './sudahBayarReducer';
import produksReducer from './produkReducer';

const reducer = combineReducers({
  hutangsReducer,
  globalReducer,
  sudahBayarReducer,
  produksReducer,
});

export default reducer;
