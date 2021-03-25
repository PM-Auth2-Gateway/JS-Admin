import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import AppList from '../../components/AppList/AppList';
import CreateAppModal from '../../components/CreateAppModal/CreateAppModal';
import { addApp, clearAllApps, loadAllApps } from '../../ducks/apps/all';

import selector from './ApplicationsPage.selector';

const ApplicationsPage = () => {
  const dispatch = useDispatch();

  const apps = useSelector(selector);

  useEffect(() => {
    dispatch(loadAllApps());

    return () => {
      dispatch(clearAllApps());
    };
  }, [dispatch]);

  const onAdd = (values) => {
    dispatch(addApp(values));
  };

  return (
    <Container>
      <Row className={classNames('mb-5', 'align-items-center')}>
        <Col>
          <h2>Applications</h2>
        </Col>
        <Col xs='auto'>
          <CreateAppModal onSubmit={onAdd} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AppList list={apps.all} loading={apps.loading} error={apps.error} />
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationsPage;
