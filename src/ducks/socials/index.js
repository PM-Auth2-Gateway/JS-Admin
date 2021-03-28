import { combineReducers } from 'redux';

import { reducer as socialsAllReducer } from './all';
import { reducer as socialsCurrentReducer } from './current';

export const reducer = combineReducers({
  all: socialsAllReducer,
  current: socialsCurrentReducer,
});
