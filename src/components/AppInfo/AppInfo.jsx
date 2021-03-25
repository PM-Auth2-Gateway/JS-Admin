import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  Alert,
  Spinner,
} from 'react-bootstrap';

import styles from './AppInfo.module.scss';
import selector from './AppInfo.selector';

import appIcon from '../../assets/app-icon.svg';
import googleIcon from '../../assets/google-avatar.png';
import facebookIcon from '../../assets/facebook-avatar.png';
import DeleteAppModal from '../DeleteAppModal/DeleteAppModal';

import {
  deleteCurrentApp,
  loadCurrentApp,
  removeCurrentApp,
  updateCurrentApp,
} from '../../ducks/apps/current';
import EditAppForm from '../EditAppForm/EditAppForm';

const AppInfo = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { url } = useRouteMatch();
  const { appId } = useParams();
  const { current, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(loadCurrentApp(appId));

    return () => {
      dispatch(removeCurrentApp());
    };
  }, [dispatch, appId]);

  const onEdit = (values) => {
    dispatch(updateCurrentApp(values));
  };

  const onDelete = async () => {
    await dispatch(deleteCurrentApp(appId));
    history.push('/applications');
  };

  return (
    <Container>
      <div className={styles.appPreview}>
        <img src={appIcon} className={styles.appIcon} alt='icon' />
        {loading ? <Spinner animation='border' /> : <h2>{current.name}</h2>}
      </div>
      <div className={styles.form}>
        <ListGroup variant={'flush'}>
          <ListGroupItem>
            <Row>
              <Col>
                <h4>Basic Information</h4>
              </Col>
              <Col>
                {loading ? (
                  <Spinner animation='border' />
                ) : (
                  <EditAppForm initialValues={current} onEdit={onEdit} />
                )}
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
                          alt='icon'
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
                          alt='icon'
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
          <Col xs='auto' className={'align-self-center'}>
            <DeleteAppModal onDelete={onDelete} />
          </Col>
        </Row>
      </Alert>
    </Container>
  );
};

export default AppInfo;
