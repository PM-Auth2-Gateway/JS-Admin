import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import appIcon from '../../assets/app-icon.svg';
import styles from './SingleApplicationPage.module.scss';

import AppInfo from '../../components/AppInfo/AppInfo';
import AppSocialsInfo from '../../components/AppSocialsInfo/AppSocialsInfo';
import AppDelete from '../../components/DeleteAppForm/DeleteAppForm';
import AppContext from '../../contexts/App.context';

import {
  deleteCurrentApp,
  loadCurrentApp,
  removeCurrentApp,
  updateCurrentApp,
} from '../../ducks/apps/current';
import { clearAllSocials, loadAllSocials } from '../../ducks/socials/all';
import { appSelector, socialsSelector } from './SingleApplicationPage.selector';

const SingleApplicationPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { appId } = useParams();

  const app = useSelector(appSelector);
  const socials = useSelector(socialsSelector);

  useEffect(() => {
    dispatch(loadCurrentApp(appId));
    dispatch(loadAllSocials(appId));

    return () => {
      dispatch(removeCurrentApp());
      dispatch(clearAllSocials());
    };
  }, [dispatch, appId]);

  const onEdit = (values) => {
    dispatch(updateCurrentApp(appId, values));
  };

  const onDelete = async () => {
    await dispatch(deleteCurrentApp(appId));
    history.push('/applications');
  };

  return (
    <Container>
      <div className={styles.appPreview}>
        <img src={appIcon} className={styles.appIcon} alt='icon' />
        {app.loading ? (
          <Spinner animation='border' />
        ) : (
          <h2>{app.current.name}</h2>
        )}
      </div>
      <AppContext.Provider value={{ appId }}>
        <Row className='mb-4'>
          <Col className={styles.form}>
            <AppInfo
              app={app.current}
              loading={app.loading}
              error={app.error}
              onEdit={onEdit}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className={styles.form}>
            <AppSocialsInfo
              socials={socials.all}
              loading={socials.loading}
              error={socials.error}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <AppDelete onDelete={onDelete} />
          </Col>
        </Row>
      </AppContext.Provider>
    </Container>
  );
};

export default SingleApplicationPage;
