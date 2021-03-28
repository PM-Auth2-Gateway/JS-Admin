import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LocalStorageService from './../../services/LocalStorageService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        LocalStorageService.getUser() ? <Component /> : <Redirect to='/' />
      }
    />
  );
};

export default PrivateRoute;
