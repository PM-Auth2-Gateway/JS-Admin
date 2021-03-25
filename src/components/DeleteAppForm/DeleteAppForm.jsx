import { Alert, Row, Col } from 'react-bootstrap';

import DeleteAppModal from '../DeleteAppModal/DeleteAppModal';

const DeleteAppForm = (props) => {
  return (
    <>
      <h3 className={'my-3'}>Danger zone</h3>
      <Alert variant={'danger'}>
        <Row>
          <Col>
            <h5>Delete this application</h5>
            <p>All your apps using this client will stop working.</p>
          </Col>
          <Col xs='auto' className={'align-self-center'}>
            <DeleteAppModal onDelete={props.onDelete} />
          </Col>
        </Row>
      </Alert>
    </>
  );
};

export default DeleteAppForm;
