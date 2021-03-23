import config from '../config';
import AppsApiService from '../services/AppsApiService';

const LOAD_ALL = 'apps/all/load';
const ADD_ALL = 'apps/all/add';
const DELETE_BY_ID_ALL = 'apps/all/delete_by_id';
const CLEAR_ALL = 'apps/all/clear';

const SET_CURRENT = 'apps/current/set';
const REMOVE_CURRENT = 'apps/current/delete';

const SET_ERROR = 'apps/error/set';

export const loadAllApps = () => (dispatch) => {
  AppsApiService.get(config.authToken)
    .then((response) => {
      dispatch(loadAll(response.data));
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const addApp = (name) => (dispatch) => {
  debugger;
  AppsApiService.post(config.authToken, { name })
    .then((response) => {
      dispatch(addAll(response.data));
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const deleteAppById = (id) => (dispatch) => {
  AppsApiService.deleteById(config.authToken, { id })
    .then((response) => {
      dispatch(deleteByIdAll(id));
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const clearAllApps = () => (dispatch) => {
  dispatch(clearAll());
};

export const loadCurrentApp = (id) => (dispatch) => {
  AppsApiService.getById(config.authToken, { id })
    .then((response) => {
      dispatch(setCurrent(response.data));
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const removeCurrentApp = () => (dispatch) => {
  dispatch(removeCurrent());
};

export const setAppError = (msg) => (dispatch) => {
  dispatch(setError(msg));
};

const loadAll = (apps) => ({
  type: LOAD_ALL,
  payload: apps,
});

const addAll = (app) => ({
  type: ADD_ALL,
  payload: app,
});

const deleteByIdAll = (id) => ({
  type: DELETE_BY_ID_ALL,
  payload: id,
});

const clearAll = () => ({
  type: CLEAR_ALL,
});

const setCurrent = (app) => ({
  type: SET_CURRENT,
  payload: app,
});

const removeCurrent = () => ({
  type: REMOVE_CURRENT,
});

const setError = (msg) => ({
  type: SET_CURRENT,
  payload: msg,
});

const initialState = {
  all: [],
  current: {},
  error: {},
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ALL:
      return {
        ...state,
        all: [...state.all, ...action.payload],
      };
    case ADD_ALL:
      return {
        ...state,
        all: [...state.all, action.payload],
      };
    case DELETE_BY_ID_ALL:
      return {
        ...state,
        all: state.all.filter((app) => app.id !== action.payload.id),
      };
    case CLEAR_ALL:
      return {
        ...state,
        all: [],
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case REMOVE_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
