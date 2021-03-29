import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <Jumbotron>
    <h1 className='mb-4'>AuthPM Admin Panel</h1>
    <h4>Everything is much easier than it seems</h4>
    <div className='mt-5'>
      <Button
        variant='outline-dark'
        as={Link}
        to={'/guide'}
        size={'lg'}
        className='mr-3'
      >
        Guids
      </Button>
      <Button variant='outline-dark' as={Link} to={'/docs'} size={'lg'}>
        Docs
      </Button>
    </div>
  </Jumbotron>
);

export default HomePage;
