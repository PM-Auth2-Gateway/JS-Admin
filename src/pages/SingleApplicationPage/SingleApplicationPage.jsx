import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './SingleApplicationPage.module.scss';

import AppInfo from '../../components/AppInfo/AppInfo';
import AppSocialsInfo from '../../components/AppSocialsInfo/AppSocialsInfo';
import AppDelete from '../../components/DeleteAppForm/DeleteAppForm';
import AppContext from '../../contexts/App.context';

const SingleApplicationPage = () => {
  const { appId } = useParams();

  return (
    <Container>
      <AppContext.Provider value={{ appId }}>
        <Row className='mb-4'>
          <Col className={styles.form}>
            <AppInfo />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className={styles.form}>
            <AppSocialsInfo />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <AppDelete />
          </Col>
        </Row>
      </AppContext.Provider>
    </Container>
  );
};

export default SingleApplicationPage;
