import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as appsAllReducer } from '../ducks/apps/all';
import { reducer as appsCurrentReducer } from '../ducks/apps/current';

const rootReducer = combineReducers({
  appsAll: appsAllReducer,
  appsCurrent: appsCurrentReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
