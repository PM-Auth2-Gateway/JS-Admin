import SocialsApiService from '../../services/SocialsApiService';

const SET_CURRENT = 'socials/current/set';
const UPDATE_CURRENT = 'socials/current/update';
const REMOVE_CURRENT = 'socials/current/remove';

const SET_LOADING = 'socials/current/loading/set';
const SET_ERROR = 'socials/current/error/set';

export const loadCurrentSocial = (appId, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await SocialsApiService.getById(appId, id);

    dispatch(setCurrent(res.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateCurrentSocial = (
  appId,
  id,
  { client_id, scope, secret_key }
) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await SocialsApiService.updateById(appId, id, {
      client_id,
      scope,
      secret_key,
    });

    dispatch(updateCurrent(res.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeCurrentSocial = () => (dispatch) => {
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
