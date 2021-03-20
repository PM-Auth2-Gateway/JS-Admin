import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <Navbar className={styles.border}>
      <NavLink to='/'>
        <Navbar.Brand>
          <Image
            src='/favicon.ico'
            alt='icon'
            width='30'
            height='30'
            className='mr-2 align-center align-top'
            rounded
          />
        </Navbar.Brand>
      </NavLink>
      <Nav>
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
    </Navbar>
  );
};

export default Navigation;
