import classNames from 'classnames';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

import styles from './AppList.module.scss';
import selector from './AppList.selector';

import AppPreview from '../AppPreview/AppPreview';
import CreateAppModal from '../CreateAppModal/CreateAppModal';

import { clearAllApps, loadAllApps } from '../../ducks/apps';

const AppList = () => {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();

  const allApp = useSelector(selector);

  useEffect(() => {
    dispatch(loadAllApps());

    return () => {
      dispatch(clearAllApps());
    };
  }, [dispatch]);

  return (
    <Container>
      <Row className={classNames('mb-5', 'align-items-center')}>
        <Col>
          <h2>Applications</h2>
        </Col>
        <Col xs='auto'>
          <CreateAppModal />
        </Col>
      </Row>
      <ListGroup variant={'flush'}>
        {allApp.map((app) => (
          <ListGroup.Item key={app.id} className={styles.listItem}>
            <AppPreview url={`${url}/${app.id}`} name={app.name} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AppList;
