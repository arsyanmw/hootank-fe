const {combineReducers} = require('redux');

import hutangsReducer from './hutangReducer';
import globalReducer from './globalReducer';

const reducer = combineReducers({
  hutangsReducer,
  globalReducer,
});

export default reducer;
