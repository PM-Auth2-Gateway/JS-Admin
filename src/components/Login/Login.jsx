import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Dropdown, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSocials } from '../../ducks/auth/socials';
import { loginSelector } from './Login.selector';
import {
  login,
  logout,
  setAuthenticated,
  setUser,
} from './../../ducks/auth/user';
import LocalStorageService from './../../services/LocalStorageService';

import styles from './Login.module.scss';

const LoginButton = () => {
  const dispatch = useDispatch();
  const { socials, authenticated, user } = useSelector(loginSelector);

  useEffect(() => {
    dispatch(getSocials());
    if (LocalStorageService.getToken()) {
      dispatch(setAuthenticated(true));
      dispatch(setUser(LocalStorageService.getUser()));
    }
  }, [dispatch]);

  const handleLogin = (id) => {
    dispatch(login(id));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Dropdown className='mr-5'>
      {!authenticated && !user ? (
        <>
          <Dropdown.Toggle variant='primary'>Login</Dropdown.Toggle>
          <Dropdown.Menu
            className={classNames(styles.dropdown, 'dropdown-menu-right')}
          >
            {socials &&
              socials.map((soc) => (
                <Dropdown.Item key={soc.id} onClick={() => handleLogin(soc.id)}>
                  {soc.name}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </>
      ) : (
        <>
          <Dropdown.Toggle variant='light'>
            <Image
              src={user.photo}
              alt={user.firstName}
              width='30'
              h='30'
              roundedCircle
              className='mr-1'
            />
            {user.firstName} {user.lastName}
          </Dropdown.Toggle>
          <Dropdown.Menu
            className={classNames(styles.dropdown, 'dropdown-menu-right')}
          >
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </>
      )}
    </Dropdown>
  );
};

export default LoginButton;
