import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import AppList from '../../components/AppList/AppList';
import CreateAppModal from '../../components/CreateAppModal/CreateAppModal';
import { addApp } from '../../ducks/apps/all';

const ApplicationsPage = () => {
  const dispatch = useDispatch();

  const onAdd = (values) => {
    dispatch(addApp(values));
  };

  return (
    <Container>
      <Row className={classNames('mb-4', 'align-items-center')}>
        <Col>
          <h2>Applications</h2>
        </Col>
        <Col xs='auto'>
          <CreateAppModal onSubmit={onAdd} />
        </Col>
      </Row>
      <Row>
        <Col className='mb-4'>
          <AppList />
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationsPage;
