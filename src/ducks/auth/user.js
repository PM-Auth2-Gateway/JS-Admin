import LoginApiService from './../../services/LoginApiService';
import LocalStorageService from './../../services/LocalStorageService';

const SET_USER = 'auth/user/set';
const SET_LOADING = 'auth/user/loading/set';
const SET_AUTHENTICATED = 'auth/user/authenticated/set';
const CLEAR = 'auth/user/clear';
const ERROR = 'auth/user/error/set';

const setError = (payload) => ({
  type: ERROR,
  payload,
});

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const clear = () => ({
  type: CLEAR,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setAuthenticated = (payload) => ({
  type: SET_AUTHENTICATED,
  payload,
});

export const login = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await LoginApiService.getProfile();
    LocalStorageService.setToken(data.token);
    LocalStorageService.setUser(data);
    dispatch(setUser(data));
    dispatch(setAuthenticated(true));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setError(e));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => (dispatch) => {
  LocalStorageService.clear();
  dispatch(clear());
};

const initialState = {
  user: null,
  authenticated: false,
  isLoading: false,
  error: false,
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        error: false,
        isLoading: payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: payload,
      };
    case CLEAR:
      return initialState;
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
