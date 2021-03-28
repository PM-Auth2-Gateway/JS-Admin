import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as appsReducer } from '../ducks/apps/index';
import { reducer as socialsReducer } from '../ducks/socials/index';
import socialsListReducer from '../ducks/auth/socials';
import userReducer from '../ducks/auth/user';

const rootReducer = combineReducers({
  apps: appsReducer,
  socials: socialsReducer,
  socialsList: socialsListReducer,
  user: userReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
