import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useCheckAuth from './../../hooks/useCheckAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useCheckAuth();
  return (
    <Route
      {...rest}
      render={() => (isAuth ? <Component /> : <Redirect to='/' />)}
    />
  );
};

export default PrivateRoute;
