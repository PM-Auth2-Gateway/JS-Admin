import { Row, Col, Spinner } from 'react-bootstrap';

import EditAppForm from '../EditAppForm/EditAppForm';

const AppInfo = ({ app, loading, error, onEdit }) => {
  return (
    <>
      <Row>
        <Col>
          <h4>Basic Information</h4>
        </Col>
        <Col>
          {loading ? (
            <Spinner animation='border' />
          ) : (
            <EditAppForm initialValues={app} onEdit={onEdit} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default AppInfo;
