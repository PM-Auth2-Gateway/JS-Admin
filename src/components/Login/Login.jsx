import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getSocials } from '../../ducks/auth/socials';
import {
  login,
  logout,
  setAuthenticated,
  setUser,
} from './../../ducks/auth/user';
import LocalStorageService from './../../services/LocalStorageService';
import LoginApiService from './../../services/LoginApiService';
import { loginSelector } from './Login.selector';

import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const { socials, authenticated, user } = useSelector(loginSelector);
  const history = useHistory();

  useEffect(() => {
    if (LocalStorageService.getToken()) {
      dispatch(setAuthenticated(true));
      dispatch(setUser(LocalStorageService.getUser()));
    } else {
      dispatch(getSocials());
    }
  }, [dispatch, authenticated]);

  const handleLogin = async (id) => {
    const link = await LoginApiService.getAuthLink(id);
    const popup = window.open(
      link,
      'Auth',
      'width=972,height=660,modal=yes,alwaysRaised=yes'
    );

    const interval = setInterval(() => {
      if (popup.closed) {
        clearInterval(interval);
        dispatch(login(id));
      }
    }, 1000);
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <Dropdown className='mr-5'>
      {!authenticated && !user ? (
        <>
          <Dropdown.Toggle
            variant='primary'
            className={classNames('d-flex', 'align-items-center')}
          >
            Login with
          </Dropdown.Toggle>
          <Dropdown.Menu
            className={classNames(styles.dropdown, 'dropdown-menu-right')}
          >
            {socials &&
              socials.map((soc) => (
                <Dropdown.Item
                  key={soc.id}
                  onClick={() => handleLogin(soc.id)}
                  className={classNames('d-flex', 'align-items-center')}
                >
                  <Image
                    src={soc.logoPath}
                    width='20'
                    height='20'
                    className='mr-3'
                  />
                  {soc.name}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </>
      ) : (
        <>
          <Dropdown.Toggle
            variant='light'
            className={classNames('d-flex', 'align-items-center')}
          >
            <Image
              src={user.photo}
              alt={user.firstName}
              width='30'
              h='30'
              roundedCircle
              className='mr-1'
              referrerPolicy='no-referrer'
            />
            {user.firstName} {user.lastName}
          </Dropdown.Toggle>
          <Dropdown.Menu
            className={classNames(styles.dropdown, 'dropdown-menu-right')}
          >
            <Dropdown.Item as={Link} to='/applications'>
              Applications
            </Dropdown.Item>
            <Dropdown.Item data-test='logout-btn' onClick={handleLogout}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </>
      )}
    </Dropdown>
  );
};

export default Login;
