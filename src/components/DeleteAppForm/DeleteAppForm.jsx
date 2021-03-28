import { Alert, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../contexts/App.context';

import DeleteAppModal from '../DeleteAppModal/DeleteAppModal';

import { deleteCurrentApp } from '../../ducks/apps/current';
import { toast } from 'react-toastify';

const DeleteAppForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { appId } = useAppContext();

  const onDelete = async () => {
    await dispatch(deleteCurrentApp(appId));
    history.push('/applications');

    toast(`Application with id ${appId} deleted successfully`);
  };

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
            <DeleteAppModal onDelete={onDelete} />
          </Col>
        </Row>
      </Alert>
    </>
  );
};

export default DeleteAppForm;
