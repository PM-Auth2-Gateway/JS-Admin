import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as appsReducer } from '../ducks/apps/index';
import { reducer as socialsReducer } from '../ducks/socials/index';

const rootReducer = combineReducers({
  apps: appsReducer,
  socials: socialsReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
