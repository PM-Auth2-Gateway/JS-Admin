import { useSelector } from 'react-redux';
import LocalStorageService from '../services/LocalStorageService';
import { createSelector } from 'reselect';

const isAuthenticatedSelector = createSelector(
  (state) => state.user,
  ({ authenticated }) => authenticated
);

const useCheckAuth = () => {
  const isAuth = useSelector(isAuthenticatedSelector);

  if (isAuth || LocalStorageService.getUser()) {
    return true;
  } else {
    return false;
  }
};

export default useCheckAuth;
