import { useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import appIcon from '../../assets/app-icon.svg';
import EditAppForm from '../EditAppForm/EditAppForm';

import {
  loadCurrentApp,
  removeCurrentApp,
  updateCurrentApp,
} from '../../ducks/apps/current';

import styles from './AppInfo.module.scss';
import selector from './AppInfo.selector';
import { useAppContext } from '../../contexts/App.context';

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
      <div className={styles.appPreview}>
        <img src={appIcon} className={styles.appIcon} alt='icon' />
        {loading ? <Spinner animation='border' /> : <h2>{current.name}</h2>}
      </div>
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
    </>
  );
};

export default AppInfo;
