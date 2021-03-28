import LoginApiService from './../../services/LoginApiService';

const SET_LOADING = 'auth/socials/SET_LOADING';
const SET_SOCIALS = 'auth/socials/SET_SOCIALS';

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const setSocials = (payload) => ({
  type: SET_SOCIALS,
  payload,
});

export const getSocials = () => async (dispatch) => {
  dispatch(setLoading(true));
  const socials = await LoginApiService.getSocials();
  dispatch(setSocials(socials));
  dispatch(setLoading(false));
};

const initialState = {
  isLoading: false,
  socials: null,
  authLink: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_SOCIALS:
      return {
        ...state,
        socials: payload,
      };
    default:
      return state;
  }
};

export default reducer;
