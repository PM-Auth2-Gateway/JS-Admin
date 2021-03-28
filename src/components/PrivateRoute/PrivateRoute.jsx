import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticatedSelector } from './PrivateRoute.selector';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? <Component /> : <Redirect to='/' />)}
    />
  );
};

export default PrivateRoute;
