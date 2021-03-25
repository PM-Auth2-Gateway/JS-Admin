import { combineReducers } from 'redux';

import { reducer as appsAllReducer } from './all';
import { reducer as appsCurrentReducer } from './current';

export const reducer = combineReducers({
  all: appsAllReducer,
  current: appsCurrentReducer,
});
