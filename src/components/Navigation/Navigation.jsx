import React, { useState } from 'react';
import classNames from 'classnames';
import { Image, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useFacebookAuth } from '../../hooks/useFacebookAuth';

import styles from './Navigation.module.scss';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const Navigation = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const { loginWithFacebook, logoutWithFacebook } = useFacebookAuth();
  const { loginWithGoogle, logoutWithGoogle } = useGoogleAuth();

  const login = (provider) => {
    switch (provider) {
      case 'facebook':
        loginWithFacebook().then((user) => {
          setUser({ ...user, picture: user.picture.data.url });
          setAuthenticated(true);
        });
        break;
      case 'google':
        loginWithGoogle().then((user) => {
          setUser(user);
          setAuthenticated(true);
        });
        break;
      default:
        break;
    }
  };

  const logout = () => {
    logoutWithGoogle().then(() => {
      setAuthenticated(false);
      setUser(null);
    });
    logoutWithFacebook().then(() => {
      setAuthenticated(false);
      setUser(null);
    });
  };

  return (
    <Navbar collapseOnSelect expand='md' className={styles.border}>
      <NavLink to='/'>
        <Navbar.Brand>
          <Image
            src='/favicon.ico'
            alt='icon'
            width='30'
            height='30'
            className={classNames('mr-2', 'align-center', 'align-top')}
            rounded
          />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link
            as={NavLink}
            to='/applications'
            activeClassName='text-primary'
          >
            Applications
          </Nav.Link>
          <Nav.Link as={NavLink} to='/guide' activeClassName='text-primary'>
            Guide
          </Nav.Link>
          <Nav.Link as={NavLink} to='/docs' activeClassName='text-primary'>
            Docs
          </Nav.Link>
        </Nav>
        <Dropdown className='mr-5'>
          {!authenticated ? (
            <>
              <Dropdown.Toggle variant='primary'>Login with</Dropdown.Toggle>
              <Dropdown.Menu
                className={classNames(styles.dropdown, 'dropdown-menu-right')}
              >
                <Dropdown.Item onClick={() => login('facebook')}>
                  Facebook
                </Dropdown.Item>
                <Dropdown.Item onClick={() => login('google')}>
                  Google
                </Dropdown.Item>
              </Dropdown.Menu>
            </>
          ) : (
            <>
              <Dropdown.Toggle variant='light'>
                <Image
                  src={user.picture}
                  alt={user.name}
                  width='30'
                  h='30'
                  roundedCircle
                  className='mr-2'
                />
                {user.name}
              </Dropdown.Toggle>
              <Dropdown.Menu
                className={classNames(styles.dropdown, 'dropdown-menu-right')}
              >
                <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </>
          )}
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
