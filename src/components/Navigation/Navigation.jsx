import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Image, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthenticated(true);
    }
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const responseFacebook = (res) => {
    setUser({
      name: res.name,
      id: res.id,
      email: res.email,
      picture: res.picture.data.url,
    });
    setAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    localStorage.clear();
  };

  const responseGoogle = (res) => {
    const { profileObj } = res;
    setUser({
      name: profileObj.name,
      id: profileObj.googleId,
      email: profileObj.email,
      picture: profileObj.imageUrl,
    });
    setAuthenticated(true);
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
                <FacebookLogin
                  appId='839201246938380'
                  autoLoad={false}
                  callback={responseFacebook}
                  fields='name,email,picture'
                  render={(renderProps) => (
                    <Dropdown.Item onClick={renderProps.onClick}>
                      Facebook
                    </Dropdown.Item>
                  )}
                />
                <GoogleLogin
                  clientId='792255729562-tjcf5k4uv35et7e3v0e1g2pkmqibpsn8.apps.googleusercontent.com'
                  render={(renderProps) => (
                    <Dropdown.Item
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Google
                    </Dropdown.Item>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
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
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </>
          )}
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
