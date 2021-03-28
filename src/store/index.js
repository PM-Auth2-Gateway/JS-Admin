import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as appsAllReducer } from '../ducks/apps/all';
import { reducer as appsCurrentReducer } from '../ducks/apps/current';
import socialsListReducer from '../ducks/auth/socials';
import userReducer from '../ducks/auth/user';

const rootReducer = combineReducers({
  appsAll: appsAllReducer,
  appsCurrent: appsCurrentReducer,
  socialsList: socialsListReducer,
  user: userReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
