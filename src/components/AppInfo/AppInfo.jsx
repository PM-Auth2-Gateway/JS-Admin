import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import EditAppForm from '../EditAppForm/EditAppForm';

import {
  loadCurrentApp,
  removeCurrentApp,
  updateCurrentApp,
} from '../../ducks/apps/current';

import selector from './AppInfo.selector';
import { useAppContext } from '../../contexts/App.context';
import Preloader from '../Preloader/Preloader';

const AppInfo = () => {
  const dispatch = useDispatch();

  const { appId } = useAppContext();
  const { current, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(loadCurrentApp(appId));

    return () => {
      dispatch(removeCurrentApp());
    };
  }, [dispatch, appId]);

  const onEdit = (values) => {
    dispatch(updateCurrentApp(appId, values));
  };

  return (
    <>
      <Row>
        <Col>
          <h4>Basic Information</h4>
        </Col>
        <Col>
          {loading ? (
            <Preloader />
          ) : (
            <EditAppForm initialValues={current} onEdit={onEdit} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default AppInfo;
