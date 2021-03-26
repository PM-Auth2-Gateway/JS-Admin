import LoginApiService from './../../services/LoginApiService';
import LocalStorageService from './../../services/LocalStorageService';

const SET_USER = 'auth/user/set';
const SET_LOADING = 'auth/user/loading/set';
const SET_AUTHENTICATED = 'auth/user/authenticated/set';
const CLEAR = 'auth/user/clear';

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
  dispatch(setLoading(true));
  const user = await LoginApiService.getProfile();
  dispatch(setUser(user));
  dispatch(setAuthenticated(true));
  dispatch(setLoading(false));
};

export const logout = () => (dispatch) => {
  LocalStorageService.clear();
  dispatch(clear());
};

const initialState = {
  user: null,
  authenticated: false,
  isLoading: false,
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
        isLoading: payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: payload,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
