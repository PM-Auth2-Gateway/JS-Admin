import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  Alert,
} from 'react-bootstrap';

import styles from './AppInfo.module.scss';

import appIcon from '../../assets/app-icon.svg';
import googleIcon from '../../assets/google-avatar.png';
import facebookIcon from '../../assets/facebook-avatar.png';

const AppInfo = () => {
  const { url } = useRouteMatch();

  return (
    <Container>
      <div className={styles.appPreview}>
        <img src={appIcon} className={styles.appIcon} alt="icon" />
        <h2>App name</h2>
        {/*TODO from backend*/}
      </div>
      <div className={styles.form}>
        <ListGroup variant={'flush'}>
          <ListGroupItem>
            <Row>
              <Col>
                <h4>Basic Information</h4>
              </Col>
              <Col>
                {/*TODO get from backend basic info*/}
                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormControl type={'text'} />
                </FormGroup>
                <FormGroup>
                  <FormLabel>App ID</FormLabel>
                  <FormControl
                    type={'text'}
                    readOnly
                    defaultValue={'sadasdsadsad'}
                  />
                </FormGroup>

                <Button variant={'info'}>Save Changes</Button>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                <h4>Social networks</h4>
              </Col>
              <Col>
                {/*TODO get from backend social network list*/}
                <Card className={styles.card}>
                  <Link to={`${url}/social/1`}>
                    <Card.Body>
                      <Card.Title className={styles.socialPreview}>
                        <img
                          src={googleIcon}
                          className={styles.appIcon}
                          alt="icon"
                        />
                        <p>Google</p>
                      </Card.Title>
                      <Card.Text className={'text-muted'}>
                        Allow your users to login with their Google Account
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
                <Card className={styles.card}>
                  <Link to={`${url}/social/2`}>
                    <Card.Body>
                      <Card.Title className={styles.socialPreview}>
                        <img
                          src={facebookIcon}
                          className={styles.appIcon}
                          alt="icon"
                        />
                        <p>Facebook</p>
                      </Card.Title>
                      <Card.Text className={'text-muted'}>
                        A fast and convenient way for users to log into your app
                        with Facebook
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </div>

      <h3 className={'my-3'}>Danger zone</h3>
      <Alert variant={'danger'}>
        <Row>
          <Col>
            <h5>Delete this application</h5>
            <p>All your apps using this client will stop working.</p>
          </Col>
          <Col xs="auto" className={'align-self-center'}>
            <Button variant={'danger'}>Delete</Button>
          </Col>
        </Row>
      </Alert>
    </Container>
  );
};

export default AppInfo;
