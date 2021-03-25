import SocialsApiService from '../../services/SocialsApiService';

const LOAD_ALL = 'socials/all/load';
const CLEAR_ALL = 'socials/all/clear';

const SET_LOADING = 'socials/all/loading/set';
const SET_ERROR = 'socials/all/error/set';

export const loadAllSocials = (appId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await SocialsApiService.get(appId);

    dispatch(loadAll(res.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const clearAllSocials = () => (dispatch) => {
  dispatch(clearAll());
};

export const setSocialsError = (msg) => (dispatch) => {
  dispatch(setError(msg));
};

const loadAll = (apps) => ({
  type: LOAD_ALL,
  payload: apps,
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
