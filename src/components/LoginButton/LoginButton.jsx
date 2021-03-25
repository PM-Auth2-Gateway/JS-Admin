import React from 'react';
import { Button } from 'react-bootstrap';
import LoginApiService from './../../services/LoginApiService';

const LoginButton = () => {
  const handleLogin = () => {
    LoginApiService.login();
  };

  return <Button onClick={handleLogin}>Login</Button>;
};

export default LoginButton;
