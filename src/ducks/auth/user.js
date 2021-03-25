import LoginApiService from './../../services/LoginApiService';
import LocalStorageService from './../../services/LocalStorageService';

const SET_USER = 'auth/user/set';
const SET_LOADING = 'auth/user/loading/set';
const SET_AUTHENTICATED = 'auth/user/authenticated/set';

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setAuthenticated = (payload) => ({
  type: SET_AUTHENTICATED,
  payload,
});

export const login = (social_id) => async (dispatch) => {
  dispatch(setLoading(true));
  await LoginApiService.login(social_id);
  const user = await LoginApiService.getProfile();
  dispatch(setUser(user));
  LocalStorageService.setUser(user);
  dispatch(setAuthenticated(true));
  dispatch(setLoading(false));
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
    default:
      return state;
  }
};

export default reducer;