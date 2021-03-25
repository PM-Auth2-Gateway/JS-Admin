import React from 'react';
import classNames from 'classnames';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoginButton from './../LoginButton/LoginButton';

import styles from './Navigation.module.scss';

const Navigation = () => {
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
        <LoginButton />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
