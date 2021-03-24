import config from '../../config';
import AppsApiService from '../../services/AppsApiService';

const SET_CURRENT = 'apps/current/set';
const UPDATE_CURRENT = 'app/current/update';
const DELETE_CURRENT = 'apps/current/delete';
const REMOVE_CURRENT = 'apps/current/remove';

const SET_LOADING = 'apps/current/loading/set';
const SET_ERROR = 'apps/current/error/set';

export const loadCurrentApp = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await AppsApiService.getById(config.authToken, { id });

    dispatch(setCurrent(res.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateCurrentApp = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await AppsApiService.updateById(config.authToken, data);

    dispatch(updateCurrent(res.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteCurrentApp = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await AppsApiService.deleteById(config.authToken, { id });

    dispatch(deleteCurrent());
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeCurrentApp = () => (dispatch) => {
  dispatch(removeCurrent());
};

const setCurrent = (app) => ({
  type: SET_CURRENT,
  payload: app,
});

const updateCurrent = (data) => ({
  type: UPDATE_CURRENT,
  payload: data,
});

const deleteCurrent = (id) => ({
  type: DELETE_CURRENT,
  payload: id,
});

const removeCurrent = () => ({
  type: REMOVE_CURRENT,
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
  value: {},
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        value: action.payload,
      };
    case UPDATE_CURRENT:
      return {
        ...state,
        value: action.payload,
      };
    case DELETE_CURRENT:
      return {
        ...state,
        value: {},
      };
    case REMOVE_CURRENT:
      return {
        ...state,
        value: {},
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
