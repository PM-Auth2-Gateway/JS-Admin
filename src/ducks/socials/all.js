import SocialsApiService from '../../services/SocialsApiService';
import { toast } from 'react-toastify';

const LOAD_ALL = 'socials/all/load';
const UPDATE_STATUS_BY_ID = 'socials/all/update_by_id/status';
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

export const updateSocialStatusById = (appId, id, { status }) => async (
  dispatch
) => {
  try {
    dispatch(setLoading(true));
    const res = await SocialsApiService.updateStatusById(appId, id, { status });

    dispatch(
      updateStatusById(id, {
        status: res.data.is_active,
      })
    );
    dispatch(setError(null));

    toast(`Social network was ${!status ? 'disabled' : 'activated'}`);
  } catch (error) {
    dispatch(setError(error));

    toast.error('Something went wrong');
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

const updateStatusById = (id, { status }) => ({
  type: UPDATE_STATUS_BY_ID,
  payload: {
    id,
    status,
  },
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
        value: action.payload,
      };
    case UPDATE_STATUS_BY_ID:
      return {
        ...state,
        value: state.value.map((elem) => ({
          ...elem,
          is_active:
            elem.id === action.payload.id
              ? action.payload.status
              : elem.is_active,
        })),
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
