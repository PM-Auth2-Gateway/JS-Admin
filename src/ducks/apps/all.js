import AppsApiService from '../../services/AppsApiService';

const LOAD_ALL = 'apps/all/load';
const ADD_ALL = 'apps/all/add';
const CLEAR_ALL = 'apps/all/clear';

const SET_LOADING = 'apps/all/loading/set';
const SET_ERROR = 'apps/all/error/set';

export const loadAllApps = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await AppsApiService.get();

    dispatch(loadAll(res.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addApp = ({ name }) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await AppsApiService.post({ name });

    dispatch(addAll(res.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const clearAllApps = () => (dispatch) => {
  dispatch(clearAll());
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

const clearAll = () => ({
  type: CLEAR_ALL,
});

const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
});

const setError = (msg) => ({
  type: SET_ERROR,
  payload: msg,
});

const initialState = {
  value: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ALL:
      return {
        ...state,
        value: [...state.value, ...action.payload],
      };
    case ADD_ALL:
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    case CLEAR_ALL:
      return {
        ...state,
        value: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
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
